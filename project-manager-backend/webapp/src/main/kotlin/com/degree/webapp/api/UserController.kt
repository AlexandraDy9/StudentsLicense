package com.degree.webapp.api

import com.degree.service.user.UserService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping(value = ["/api/user"])
class UserController(private val userService: UserService) {
}