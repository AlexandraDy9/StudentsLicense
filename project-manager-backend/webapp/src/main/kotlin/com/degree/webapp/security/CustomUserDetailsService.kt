package com.degree.webapp.security

import com.degree.persistence.user.UserEntity
import com.degree.persistence.user.UserRepository
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class CustomUserDetailsService(val userRepository: UserRepository) : UserDetailsService {

    override fun loadUserByUsername(username: String): UserEntity {
        return userRepository.findByName(username)
    }
}