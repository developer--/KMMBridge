package co.touchlab.faktory

import groovy.lang.Closure
import org.apache.commons.codec.digest.DigestUtils
import org.gradle.api.*
import org.gradle.api.artifacts.Configuration
import org.gradle.api.artifacts.PublishArtifact
import org.gradle.api.artifacts.dsl.RepositoryHandler
import org.gradle.api.artifacts.repositories.ArtifactRepository
import org.gradle.api.artifacts.repositories.MavenArtifactRepository
import org.gradle.api.attributes.Bundling
import org.gradle.api.attributes.Category
import org.gradle.api.attributes.LibraryElements
import org.gradle.api.attributes.Usage
import org.gradle.api.attributes.java.TargetJvmVersion
import org.gradle.api.component.AdhocComponentWithVariants
import org.gradle.api.component.ConfigurationVariantDetails
import org.gradle.api.component.SoftwareComponentFactory
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.Property
import org.gradle.api.publish.PublishingExtension
import org.gradle.api.tasks.bundling.Zip
import org.gradle.kotlin.dsl.*
import org.jetbrains.kotlin.gradle.plugin.mpp.Framework
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget
import org.jetbrains.kotlin.gradle.plugin.mpp.NativeBuildType
import org.jetbrains.kotlin.gradle.plugin.mpp.apple.XCFramework
import org.jetbrains.kotlin.gradle.plugin.mpp.apple.XCFrameworkConfig
import java.io.File
import java.io.FileInputStream
import javax.inject.Inject
import javax.json.JsonObject

interface FaktoryExtension {
    /**
     * The name of the kotlin framework, which will be wrapped into a cocoapod. May be the same or different from podName.
     * This should be the same as
     */
    val frameworkName: Property<String>

    val dependencyManagers: ListProperty<DependencyManager>

    /**
     * If the code is built externally, just pass in a path.
     */
    val xcFrameworkPath: Property<String>

    val artifactManager: Property<ArtifactManager>

    val faktoryReadKey: Property<String>

    val buildType: Property<NativeBuildType>

    val zipFilePath: Property<File>

    val zipTask: Property<Task>

    val repo: Property<ArtifactRepository>

    fun artifacts(): MutableList<PublishArtifact> =
        mutableListOf(FaktoryArtifact(zipFilePath, zipTask))

    fun s3Public(
        region: String,
        bucket: String,
        accessKeyId: String,
        secretAccessKey: String,
        makeArtifactsPublic: Boolean,
        altBaseUrl: String?
    ) {
        artifactManager.set(
            AwsS3PublicArtifactManager(
                region,
                bucket,
                accessKeyId,
                secretAccessKey,
                makeArtifactsPublic,
                altBaseUrl,
                this
            )
        )
    }

    fun defaultUpload() {
        artifactManager.set(FaktoryServerArtifactManager())
    }

    fun Project.spm(
        spmDirectory: String? = null
    ) {
        val swiftPackageFolder = spmDirectory ?: projectDir.path
        val dependencyManager = SpmDependencyManager(swiftPackageFolder)
        dependencyManagers.set(dependencyManagers.getOrElse(emptyList()) + dependencyManager)
    }

    fun Project.cocoapods(specRepoUrl: String?) {
        kotlin.cocoapods // This will throw error if we didn't apply cocoapods plugin

        val specRepo = if (specRepoUrl == null) SpecRepo.Trunk else SpecRepo.Private(specRepoUrl)

        val dependencyManager = MultiRepoCocoapodsDependencyManager(specRepo)
        dependencyManagers.set(dependencyManagers.getOrElse(emptyList()) + dependencyManager)
    }
}

interface DependencyManager {
    /**
     * Do configuration specific to this `DependencyManager`. Generally this involves creating tasks that depend on
     * [uploadTask] and are dependencies of [publishRemoteTask].
     */
    fun doExtraConfiguration(project: Project, uploadTask: Task, publishRemoteTask: Task) {}
}

interface ArtifactManager {
    /**
     * Send the thing, and return a link to the thing...
     */
    fun deployArtifact(project: Project, zipFilePath: File, remoteFileId: String): String
}

internal const val TASK_GROUP_NAME = "kmmbridge"
private const val EXTENSION_NAME = "kmmbridge"

@Suppress("unused")
class KMMBridgePlugin @Inject constructor(
    private val softwareComponentFactory: SoftwareComponentFactory
) : Plugin<Project> {

    override fun apply(project: Project): Unit = with(project) {
        val adhoc: AdhocComponentWithVariants = softwareComponentFactory.adhoc("kmmbridge")
        components.add(adhoc)
        adhoc.addVariantsFromConfiguration(createOutgoingConfiguration()) {
            val foo: ConfigurationVariantDetails = this
            mapToMavenScope("runtime")
        }

        val extension = extensions.create<FaktoryExtension>(EXTENSION_NAME)
        extension.dependencyManagers.convention(emptyList())
        extension.buildType.convention(NativeBuildType.DEBUG)
        extension.artifactManager.convention(FaktoryServerArtifactManager())
        configureZipTask(extension)

        afterEvaluate {
            if (extension.xcFrameworkPath.orNull == null) {
                configureXcFramework()
            }

            configureDeploy()

            if (extension.xcFrameworkPath.orNull == null) {
                extension.zipTask.get().dependsOn(findXCFrameworkAssembleTask())
            }
        }
    }

    private fun Project.configureZipTask(extension: FaktoryExtension) {
        val zipFilePath = zipFilePath()

        val zipTask: Task = task<Zip>("zipXCFramework") {
            group = TASK_GROUP_NAME
            from(
                extension.xcFrameworkPath.getOrElse(
                    "$buildDir/XCFrameworks/${extension.buildType.get().getName()}"
                )
            )
            destinationDirectory.set(zipFilePath.parentFile)
            archiveFileName.set(zipFilePath.name)
        }

        extension.zipFilePath.convention(zipFilePath)
        extension.zipTask.convention(zipTask)
    }

    private fun Project.createOutgoingConfiguration(): Configuration {
        val instrumentedJars by configurations.creating {
            isCanBeConsumed = true
            isCanBeResolved = false
            attributes {
                attribute(Category.CATEGORY_ATTRIBUTE, objects.named(Category.LIBRARY))
                attribute(Usage.USAGE_ATTRIBUTE, objects.named(Usage.JAVA_RUNTIME))
                attribute(Bundling.BUNDLING_ATTRIBUTE, objects.named(Bundling.EXTERNAL))
                attribute(TargetJvmVersion.TARGET_JVM_VERSION_ATTRIBUTE, JavaVersion.current().majorVersion.toInt())
                attribute(LibraryElements.LIBRARY_ELEMENTS_ATTRIBUTE, objects.named("instrumented-jar"))
            }
        }
        return instrumentedJars
    }

    private fun valueOrEmpty(jsonObject: JsonObject, fieldName: String): String =
        if (jsonObject.isNull(fieldName)) {
            ""
        } else {
            jsonObject.getString(fieldName)
        }

    // Collect all declared frameworks in project and combine into xcframework
    private fun Project.configureXcFramework() {
        val extension = extensions.getByType<FaktoryExtension>()
        var xcFrameworkConfig: XCFrameworkConfig? = null

        kotlin.targets
            .withType<KotlinNativeTarget>()
            .filter { it.konanTarget.family.isAppleFamily }
            .flatMap { it.binaries.filterIsInstance<Framework>() }
            .forEach { framework ->
                val theName = framework.baseName
                val currentName = extension.frameworkName.orNull
                if (currentName == null) {
                    extension.frameworkName.set(theName)
                } else {
                    if (currentName != theName) {
                        throw IllegalStateException("Only one framework name currently allowed. Found $currentName and $theName")
                    }
                }
                if (xcFrameworkConfig == null) {
                    xcFrameworkConfig = XCFramework(theName)
                }
                xcFrameworkConfig!!.add(framework)
            }
    }

    private fun Project.findXCFrameworkAssembleTask(): Task {
        val extension = extensions.getByType<FaktoryExtension>()
        val name = extension.frameworkName.get()
        val buildTypeString = extension.buildType.get().getName().capitalize()
        val taskWithoutName = "assemble${buildTypeString}XCFramework"
        val taskWithName = "assemble${name.capitalize()}${buildTypeString}XCFramework"
        return try {
            tasks.findByName(taskWithName) ?: tasks.findByPath(taskWithoutName)!!
        } catch (e: Exception) {
            throw UnknownTaskException("Cannot find XCFramework assemble task. Tried ${taskWithName} and ${taskWithoutName}.")
        }
    }

    private fun Project.configureDeploy() {
        val extension = extensions.getByType<FaktoryExtension>()
        val artifactManager = extension.artifactManager.get()
        val zipFile = extension.zipFilePath.get()

        val publishing = extensions.getByType<PublishingExtension>()
        val repo = publishing.repositories.findByName("myRepo")  // Get this from our own extension properties
        val myRepo = repo as MavenArtifactRepository
        val deployUrl = buildString {
            // Repo URL
            append(myRepo.url)

            // Artifact path
            append(group.toString().replace(".", "/"))
                .append("/").append(name)
                .append("/").append(version)

            // Artifact filename
            append("/").append(name).append("-").append(version).append(".zip")
        }

        val dependencyManagers = extension.dependencyManagers.get()
        val uploadTask = task("uploadXCFramework") {
            group = TASK_GROUP_NAME

            dependsOn(extension.zipTask.get())
            inputs.file(zipFile)
            outputs.file(project.urlFile)

            doLast {
//                val deployUrl = with(artifactManager) {
//                    val remoteFileId = computeRemoteFileId(zipFile)
//                    deployArtifact(project, zipFile, remoteFileId)
//                }

                prepWriteFaktoryFiles(project) {
                    project.urlFile.writeText(deployUrl)
                }
            }
        }

        val publishRemoteTask = task("publishRemoteFramework") {
            group = TASK_GROUP_NAME
            dependsOn(uploadTask)
        }

        for (dependencyManager in dependencyManagers) {
            dependencyManager.doExtraConfiguration(this, uploadTask, publishRemoteTask)
        }
    }

    private fun computeRemoteFileId(zipFilePath: File): String =
        FileInputStream(zipFilePath).use { DigestUtils.sha256Hex(it) }

    private fun prepWriteFaktoryFiles(project: Project, block: () -> Unit) {
        project.file(".faktory").mkdirs()
        block()
    }
}

