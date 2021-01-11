package com.degree.service.student

import com.degree.model.LicenseDao
import com.degree.model.StudentDao
import com.degree.persistence.license.LicenseEntity
import com.degree.persistence.license.LicenseRepository
import com.degree.persistence.professor.TeacherRepository
import com.degree.persistence.student.StudentEntity
import com.degree.persistence.student.StudentRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class StudentService(private val studentRepository: StudentRepository,
                     private val passwordEncoder: PasswordEncoder,
                     private val studentConvertor: StudentConvertor,
                     private val teacherRepository: TeacherRepository,
                     private val licenseRepository: LicenseRepository) {

    @Transactional
    fun register(user: StudentDao) {
        val encodedPassword = passwordEncoder.encode(
                user.pass
        )
        user.pass = encodedPassword
        val newUser = studentConvertor.convertFromDao(user)
        studentRepository.save(newUser);
    }

    fun getByEmail(email: String) : StudentEntity? {
        return studentRepository.findByEmail(email);
    }

    @Transactional
    fun updateTeacher(email: String, teacherEmail: String) {
        val oldStudent = studentRepository.findByEmail(email);
        val teacher = teacherRepository.findByEmail(teacherEmail);
        val license = licenseRepository.findByTitle(oldStudent.license?.title!!);

        license.status = "pending";
        license.note = null;
        oldStudent.license = license;
        oldStudent.teacher = teacher;
        teacher.students?.add(oldStudent);

        licenseRepository.save(license);
        teacherRepository.save(teacher);
        studentRepository.save(oldStudent)
    }

    @Transactional
    fun addLicense(email: String, newStudent: StudentDao) {
        val student = studentRepository.findByEmail(email);
        val teacher = teacherRepository.findByEmail(newStudent.teacher?.email!!);
        student.teacher = teacher;

        val licenseToAdd = studentConvertor.convertLicenseFromDao(newStudent.license);
        licenseToAdd.status = "pending";
        licenseRepository.save(licenseToAdd);
        val addedLicense = licenseRepository.findByTitle(newStudent.license?.title!!);

        student.license = addedLicense;
        teacher.students?.add(student);

        teacherRepository.save(teacher);
        studentRepository.save(student);
    }

    @Transactional
    fun updateLicense(email: String, license: LicenseDao) {
        val student = studentRepository.findByEmail(email);
        val findedLicense = licenseRepository.findByTitle(license.title!!);

        findedLicense.documentation = license.documentation;
        findedLicense.description = license.description;
        findedLicense.technologies = license.technologies;
        student.license = findedLicense;

        licenseRepository.save(findedLicense);
        studentRepository.save(student)
    }

    @Transactional
    fun updateStudentStatus(email: String, status: Boolean) {
        val student = studentRepository.findByEmail(email);
        val license = licenseRepository.findByTitle(student.license?.title!!);
        if(status) {
            license.status = "accepted";
        } else {
            license.status = "declined";
        }

        student.license = license;
        licenseRepository.save(license);
        studentRepository.save(student);
    }

    @Transactional
    fun updateStudentNote(email: String, note: Int) {
        val student = studentRepository.findByEmail(email);
        val license = licenseRepository.findByTitle(student.license?.title!!);

        license.note = note;
        student.license = license;

        licenseRepository.save(license);
        studentRepository.save(student);
    }
}