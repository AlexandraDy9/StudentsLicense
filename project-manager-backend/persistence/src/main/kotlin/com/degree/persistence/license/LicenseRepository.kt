package com.degree.persistence.license

import org.springframework.data.jpa.repository.JpaRepository

interface LicenseRepository: JpaRepository<LicenseEntity, Long> {
    fun findByTitle(name: String) : LicenseEntity
}