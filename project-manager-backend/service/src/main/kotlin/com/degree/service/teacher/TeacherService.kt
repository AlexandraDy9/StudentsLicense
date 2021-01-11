package com.degree.service.teacher

import com.degree.model.ProjectDao
import com.degree.model.TeacherDao
import com.degree.persistence.professor.TeacherEntity
import com.degree.persistence.professor.TeacherRepository
import com.degree.persistence.project.ProjectEntity
import com.degree.persistence.project.ProjectRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class TeacherService(private val teacherRepository: TeacherRepository,
                     private val passwordEncoder: PasswordEncoder,
                     private val teacherConvertor: TeacherConvertor,
                     private val projectRepository: ProjectRepository) {

    fun register(user: TeacherDao) {
        val encodedPassword = passwordEncoder.encode(
                user.pass
        )
        user.pass = encodedPassword
        val newUser = teacherConvertor.convertFromDao(user)
        teacherRepository.save(newUser);
    }

    fun getAll() : List<TeacherEntity>{
        return teacherRepository.findAll()
    }

    fun getByEmail(email: String): TeacherEntity? {
        return teacherRepository.findByEmail(email);
    }

    @Transactional
    fun addProject(email: String, project: ProjectDao) {
        val oldTeacher = teacherRepository.findByEmail(email);
        val newProject = teacherConvertor.convertProjectFromDao(project);

        oldTeacher.projects?.add(newProject);
        teacherRepository.save(oldTeacher);

        newProject.teacher = oldTeacher;
        projectRepository.save(newProject);
    }

    fun getAllProjects(): MutableList<ProjectEntity> {
        val teachers = teacherRepository.findAll()
        val projects = mutableListOf<ProjectEntity>()
        for (teacher in teachers) {
            if(teacher.projects?.size!! > 0) {
                for(project in teacher.projects!!) {
                    projects.add(project)
                }
            }
        }
        return projects
    }
}