package com.degree.webapp.api

import com.degree.model.StudentDao
import com.degree.model.TeacherDao
import com.degree.service.student.StudentService
import com.degree.service.teacher.TeacherService
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping(value = ["/api/user"])
class UserController(private val studentService: StudentService, private val teacherService: TeacherService) {
    @PostMapping(value = ["/register/student"])
    fun registerStudent(@Valid @RequestBody user: StudentDao) {
        studentService.register(user)
    }

    @PostMapping(value = ["/register/teacher"])
    fun registerTeacher(@Valid @RequestBody user: TeacherDao) {
        teacherService.register(user)
    }
}