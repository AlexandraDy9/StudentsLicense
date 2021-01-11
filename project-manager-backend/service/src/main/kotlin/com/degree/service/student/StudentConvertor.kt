package com.degree.service.student

import com.degree.model.LicenseDao
import com.degree.model.StudentDao
import com.degree.persistence.license.LicenseEntity
import com.degree.persistence.student.StudentEntity
import org.springframework.stereotype.Service

@Service
class StudentConvertor {
    fun convertFromDao(student: StudentDao) : StudentEntity = StudentEntity(student.name,
            student.firstName, student.lastName, student.pass, student.email)

    fun convertLicenseFromDao(license: LicenseDao?) : LicenseEntity = LicenseEntity(license?.title,
            license?.technologies, license?.status, license?.note, license?.documentation, license?.description)
}