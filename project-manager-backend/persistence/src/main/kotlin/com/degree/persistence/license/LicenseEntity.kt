package com.degree.persistence.license

import com.degree.persistence.base.BaseEntity
import javax.persistence.*
import java.sql.Blob
import javax.validation.constraints.NotEmpty

@Entity(name = "license")
class LicenseEntity(
        @field:NotEmpty
        var title: String? = null,

        @ElementCollection
        var technologies: List<String>? = null,

        @field:NotEmpty
        var status: String? = null,

        var note: Int? = null,

        @Lob
        var documentation: Blob? = null,

        @field:NotEmpty
        @Column(length = 5000)
        var description: String? = null
) : BaseEntity()
