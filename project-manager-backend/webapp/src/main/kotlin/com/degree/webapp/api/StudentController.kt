package com.degree.webapp.api

import com.degree.model.LicenseDao
import com.degree.model.StudentDao
import com.degree.persistence.license.LicenseEntity
import com.degree.persistence.student.StudentEntity
import com.degree.service.student.StudentService
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping(value = ["/api/students"])
class StudentController(private val studentService: StudentService) {

    @GetMapping(value = ["{email}"])
    fun getByEmail(@Valid @PathVariable email: String): StudentEntity? {
        return studentService.getByEmail(email)
    }

    @PutMapping(value = ["{email}/update-teacher/{teacherEmail}"])
    fun updateTeacher(@Valid @PathVariable email: String, @Valid @PathVariable teacherEmail: String) {
        studentService.updateTeacher(email, teacherEmail);
    }

    @PutMapping(value = ["{email}/add-license"])
    fun addLicense(@Valid @PathVariable email: String, @Valid @RequestBody student: StudentDao) {
        studentService.addLicense(email, student);
    }

    @PutMapping(value = ["{email}/update-license"])
    fun updateLicense(@Valid @PathVariable email: String, @Valid @RequestBody license: LicenseDao) {
        studentService.updateLicense(email, license);
    }

    @PutMapping(value = ["{email}/update-status/{status}"])
    fun updateStudentStatus(@Valid @PathVariable email: String, @Valid @PathVariable status: Boolean) {
        studentService.updateStudentStatus(email, status);
    }

    @PutMapping(value = ["{email}/update-note/{note}"])
    fun updateStudentNote(@Valid @PathVariable email: String, @Valid @PathVariable note: Int) {
        studentService.updateStudentNote(email, note);
    }
}