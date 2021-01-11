package com.degree.persistence.student

import org.springframework.data.jpa.repository.JpaRepository

interface StudentRepository : JpaRepository<StudentEntity, Long> {
    fun findByEmail(name: String) : StudentEntity
}