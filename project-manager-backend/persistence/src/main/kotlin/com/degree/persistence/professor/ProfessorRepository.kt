package com.degree.persistence.professor

import org.springframework.data.jpa.repository.JpaRepository

interface ProfessorRepository : JpaRepository<ProfessorEntity, Long> {
}