package com.degree.model

import java.sql.Blob

data class LicenseDao (
        var title: String?,
        var technologies: List<String>?,
        var status: String?,
        var note: Int?,
        var documentation: Blob?,
        var description: String?
)