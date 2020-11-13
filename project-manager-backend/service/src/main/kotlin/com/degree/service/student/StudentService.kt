package com.degree.service.student

import com.degree.persistence.student.StudentEntity
import com.degree.persistence.student.StudentRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class StudentService(private val studentRepository: StudentRepository,
                     private val studentConverter: StudentConverter) {

    @Transactional
    fun add(student: StudentEntity){
        studentRepository.save(student)
    }

    fun getAll() : List<StudentEntity>{
        return studentRepository.findAll()
    }
}