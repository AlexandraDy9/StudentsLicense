package com.degree.service.user

import com.degree.persistence.user.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {
}