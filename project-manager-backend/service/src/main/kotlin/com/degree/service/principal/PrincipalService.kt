package com.degree.service.principal

import com.degree.persistence.user.UserEntity
import com.degree.persistence.user.UserRepository
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import javax.persistence.EntityNotFoundException

@Service
class PrincipalService(private val userRepository: UserRepository) {

    fun getPrincipal(): UserEntity {
        val username: String =
                when (val principal = SecurityContextHolder.getContext().authentication.principal) {
                    is String -> principal
                    is UserEntity -> principal.username
                    else -> throw EntityNotFoundException("Can't retrieve username!")
                }
        return userRepository.findByName(username)
    }
}