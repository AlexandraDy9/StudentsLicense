package com.degree.model

data class StudentDao (
    var name: String,
    var pass: String,
    var firstName: String,
    var lastName: String,
    var email: String?,
    var teacher: TeacherDao?,
    var license: LicenseDao?
)