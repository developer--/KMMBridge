package co.touchlab.faktory

import org.gradle.api.Task
import org.gradle.api.artifacts.PublishArtifact
import org.gradle.api.tasks.TaskDependency
import java.io.File
import java.util.*
import org.gradle.api.provider.Property

class FaktoryArtifact(private val zipFile: Property<File>, private val zipTask: Property<Task>) : PublishArtifact {
    override fun getBuildDependencies(): TaskDependency = TaskDependency { mutableSetOf(zipTask.get()) }
    override fun getName(): String = "shared-xcframework"
    override fun getExtension(): String = "zip"
    override fun getType(): String = "xcframework"
    override fun getClassifier(): String? = null
    override fun getFile(): File = zipFile.get()
    override fun getDate(): Date? = null
}
