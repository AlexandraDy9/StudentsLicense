package com.degree.persistence.professor

import javax.persistence.*
import com.degree.persistence.base.BaseEntity
import com.degree.persistence.student.StudentEntity
import com.degree.persistence.user.UserEntity
import com.degree.persistence.project.ProjectEntity

@Entity(name = "professor")
class ProfessorEntity(
        @OneToMany(mappedBy= "professor", cascade = [CascadeType.ALL])
        var student: MutableList<StudentEntity>? = null,

        @OneToMany(mappedBy= "professor", cascade = [CascadeType.ALL])
        var project: MutableList<ProjectEntity>? = null,

        @OneToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "fk_user")
        var user: UserEntity? = null

) : BaseEntity()