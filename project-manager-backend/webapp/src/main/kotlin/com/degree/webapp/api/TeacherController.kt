package com.degree.webapp.api

import com.degree.model.ProjectDao
import com.degree.model.TeacherDao
import com.degree.persistence.professor.TeacherEntity
import com.degree.persistence.project.ProjectEntity
import com.degree.persistence.student.StudentEntity
import com.degree.service.teacher.TeacherService
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping(value = ["/api/teachers"])
class TeacherController(private val teacherService: TeacherService) {

    @GetMapping(value = ["/byEmail/{email}"])
    fun getTeacherByEmail(@Valid @PathVariable email: String): TeacherEntity? {
        return teacherService.getByEmail(email);
    }

    @GetMapping
    fun getAllTeachers(): List<TeacherEntity> {
        return teacherService.getAll()
    }

    @PutMapping(value = ["{email}/add-project"])
    fun addProject(@Valid @PathVariable email: String, @Valid @RequestBody project: ProjectDao) {
        teacherService.addProject(email, project);
    }

    @GetMapping(value = ["/getAllProjects"])
    fun getAllProjects(): MutableList<ProjectEntity> {
        return teacherService.getAllProjects();
    }
}