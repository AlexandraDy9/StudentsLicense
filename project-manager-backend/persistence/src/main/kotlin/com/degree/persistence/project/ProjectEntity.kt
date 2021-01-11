package com.degree.persistence.project

import javax.persistence.*
import javax.validation.constraints.NotEmpty
import com.degree.persistence.base.BaseEntity
import com.degree.persistence.professor.TeacherEntity
import com.degree.persistence.student.StudentEntity
import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@Entity(name = "project")
class ProjectEntity(
        @field:NotEmpty
        var title: String? = null,

        @field:NotEmpty
        @Column(length = 5000)
        var description: String? = null,

        var sessionYear: Int? = null,

        @JsonIgnoreProperties("projects")
        @ManyToOne
        @JoinColumn(name = "fk_teacher")
        var teacher: TeacherEntity? = null
) : BaseEntity()