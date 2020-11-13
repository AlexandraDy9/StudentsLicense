package com.degree.webapp.api

import com.degree.persistence.student.StudentEntity
import com.degree.service.student.StudentService
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping(value = ["/api/student"])
class StudentController(private val studentService: StudentService) {

    @PostMapping
    fun add(@Valid @RequestBody student: StudentEntity) {
        studentService.add(student)
    }

    @GetMapping
    fun getAll(): List<StudentEntity> {
        return studentService.getAll()
    }
}