package com.degree.persistence.project

import javax.persistence.*
import javax.validation.constraints.NotEmpty
import com.degree.persistence.base.BaseEntity
import com.degree.persistence.professor.ProfessorEntity
import com.degree.persistence.student.StudentEntity

@Entity(name = "project")
class ProjectEntity(
        @field:NotEmpty
        var title: String? = null,

        @field:NotEmpty
        var description: String? = null,

        @OneToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "fk_student")
        var student: StudentEntity? = null,

        @ManyToOne
        @JoinColumn(name = "fk_professor")
        var professor: ProfessorEntity? = null
) : BaseEntity()