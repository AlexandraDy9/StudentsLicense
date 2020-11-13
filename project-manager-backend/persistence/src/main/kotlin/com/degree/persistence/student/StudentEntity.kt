package com.degree.persistence.student

import javax.persistence.*
import com.degree.persistence.base.BaseEntity
import com.degree.persistence.license.LicenseEntity
import com.degree.persistence.professor.ProfessorEntity
import com.degree.persistence.user.UserEntity
import com.degree.persistence.project.ProjectEntity

@Entity(name = "student")
class StudentEntity(
        @OneToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "fk_user")
        var user: UserEntity? = null,

        @ManyToOne
        @JoinColumn(name = "fk_professor")
        var professor: ProfessorEntity? = null,

        @OneToOne(fetch = FetchType.LAZY, mappedBy = "student")
        var license: LicenseEntity? = null,

        @OneToOne(fetch = FetchType.LAZY, mappedBy = "student")
        var project: ProjectEntity? = null
) : BaseEntity()
