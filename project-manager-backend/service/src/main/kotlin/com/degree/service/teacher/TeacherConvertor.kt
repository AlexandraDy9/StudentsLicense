package com.degree.service.teacher

import com.degree.model.ProjectDao
import com.degree.model.TeacherDao
import com.degree.persistence.professor.TeacherEntity
import com.degree.persistence.project.ProjectEntity
import org.springframework.stereotype.Service

@Service
class TeacherConvertor {
    fun convertFromDao(teacher: TeacherDao) : TeacherEntity = TeacherEntity(teacher.name,
            teacher.firstName, teacher.lastName, teacher.pass, teacher.email)

    fun convertProjectFromDao(project: ProjectDao?) : ProjectEntity = ProjectEntity(project?.title,
            project?.description, project?.sessionYear)
}