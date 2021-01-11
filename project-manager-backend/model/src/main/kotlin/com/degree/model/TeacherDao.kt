package com.degree.model

data class TeacherDao (
    var name: String,
    var pass: String,
    var firstName: String,
    var lastName: String,
    var email: String,
    var projects: List<ProjectDao>?,
    var students: List<StudentDao>?
)