package com.degree.persistence.license

import com.degree.persistence.base.BaseEntity
import javax.persistence.*
import com.degree.persistence.student.StudentEntity
import java.sql.Blob
import javax.validation.constraints.NotEmpty

@Entity(name = "license")
class LicenseEntity(
        @field:NotEmpty
        var title: String? = null,

        @field:NotEmpty
        var technologies: String? = null,

        @Lob
        var documentation: Blob? = null,

        @field:NotEmpty
        var description: String? = null,

        @OneToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "fk_student")
        var student: StudentEntity? = null
) : BaseEntity()
