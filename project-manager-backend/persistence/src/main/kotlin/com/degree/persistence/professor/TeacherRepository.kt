package com.degree.persistence.professor

import org.springframework.data.jpa.repository.JpaRepository

interface TeacherRepository : JpaRepository<TeacherEntity, Long> {
    fun findByEmail(name: String) : TeacherEntity
}