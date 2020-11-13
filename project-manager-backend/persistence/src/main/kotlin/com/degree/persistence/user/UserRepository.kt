package com.degree.persistence.user

import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<UserEntity, Long> {
     fun findByName(name: String) : UserEntity
}