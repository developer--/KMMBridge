package co.touchlab.faktory

import co.touchlab.faktory.co.touchlab.faktory.internal.GithubCalls
import co.touchlab.faktory.co.touchlab.faktory.internal.procRunFailLog
import co.touchlab.faktory.co.touchlab.faktory.internal.procRunWarnLog
import org.gradle.api.Project
import org.gradle.api.Task
import java.io.ByteArrayOutputStream
import java.io.File
import java.nio.charset.Charset

class SpmDependencyManager(
    /**
     * Folder where the Package.swift file lives
     */
    private val swiftPackageFolder: String,
    private val commitVersionStrategy: CommitVersionStrategy,
    private val packageName: String
) : DependencyManager {

    enum class CommitVersionStrategy {
        None, GitTag, GithubRelease
    }

    private val swiftPackageFilePath: String
        get() = "${stripEndSlash(swiftPackageFolder)}/Package.swift"

    override fun configure(project: Project, uploadTask: Task, publishRemoteTask: Task) {
        val updatePackageSwiftTask = project.task("updatePackageSwift") {
            group = TASK_GROUP_NAME
            val zipFile = project.zipFilePath()
            inputs.files(zipFile, project.urlFile, project.versionFile)

            doLast {
                val originalPackageFile = project.readPackageFile()

                val checksum = project.findSpmChecksum(zipFile)
                val url = project.urlFile.readText()

                project.writePackageFile(packageName, url, checksum)
                val version = project.versionFile.readText()

                if (commitVersionStrategy != CommitVersionStrategy.None) {

                    project.procRunFailLog("git", "add", ".")
                    project.procRunWarnLog("git", "commit", "-m", "KMM SPM package release for $version")
                    if (commitVersionStrategy == CommitVersionStrategy.GitTag) {
                        project.procRunFailLog("git", "tag", "-a", version, "-m", "KMM release version $version")
                    } else {
                        project.procRunFailLog("git", "push")
                        val commitId = project.procRunFailLog("git", "rev-parse", "HEAD").first()
                        GithubCalls.createRelease(project, project.githubRepo, version, commitId)
                    }

                    // Only overwrite if original file existed
                    if(originalPackageFile != null)
                        project.writePackageFile(originalPackageFile)
                    else
                        project.deletePackageFile()

                    project.procRunFailLog("git", "add", ".")
                    project.procRunWarnLog("git", "commit", "-m", "KMM SPM package file revert")
                    if (commitVersionStrategy == CommitVersionStrategy.GitTag) {
                        project.procRunFailLog("git", "push", "--follow-tags")
                    } else {
                        project.procRunWarnLog("git", "push")
                    }
                }
            }
        }

        updatePackageSwiftTask.dependsOn(uploadTask)
        publishRemoteTask.dependsOn(updatePackageSwiftTask)
    }

    private fun Project.writePackageFile(packageName: String, url: String, checksum: String){
        val swiftPackageFile = file(swiftPackageFilePath)
        val packageText = makePackageFileText(packageName, url, checksum)
        swiftPackageFile.parentFile.mkdirs()
        swiftPackageFile.writeText(packageText)
    }

    private fun Project.findSpmChecksum(zipFilePath: File): String {
        val os = ByteArrayOutputStream()

        // checksum requires a package file, but doesn't require it to be real (and we might only have cocoapods)
        val packageSwiftFile = file("Package.swift")
        val hadPackageSwift = packageSwiftFile.exists()

        if (!hadPackageSwift) {
            packageSwiftFile.writeText("")
        }

        exec {
            commandLine(
                "swift",
                "package",
                "compute-checksum",
                zipFilePath.path
            )
            standardOutput = os
        }

        if (!hadPackageSwift) {
            packageSwiftFile.delete()
        }

        return os.toByteArray().toString(Charset.defaultCharset()).trim()
    }

    private fun Project.readPackageFile(): String? {
        val file = file(swiftPackageFilePath)
        return if (file.exists()) {
            file.readText()
        } else {
            null
        }
    }

    private fun Project.writePackageFile(data:String){
        file(swiftPackageFilePath).writeText(data)
    }

    private fun Project.deletePackageFile(){
        val pfile = file(swiftPackageFilePath)
        if(pfile.exists())
            pfile.delete()
    }
}

internal fun stripEndSlash(path: String): String {
    return if (path.endsWith("/")) {
        path.substring(0, path.length - 1)
    } else {
        path
    }
}

private fun makePackageFileText(packageName: String, url:String, checksum: String): String = """
// swift-tools-version:5.3
import PackageDescription

let remoteKotlinUrl = "$url"
let remoteKotlinChecksum = "$checksum"
let packageName = "$packageName"

let package = Package(
    name: packageName,
    platforms: [
        .iOS(.v13)
    ],
    products: [
        .library(
            name: packageName,
            targets: [packageName]
        ),
    ],
    targets: [
        .binaryTarget(
            name: packageName,
            url: remoteKotlinUrl,
            checksum: remoteKotlinChecksum
        )
        ,
    ]
)
""".trimIndent()
