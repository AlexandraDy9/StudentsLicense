package com.degree.persistence.professor

import javax.persistence.*
import com.degree.persistence.base.BaseEntity
import com.degree.persistence.base.TimestampedEntity
import com.degree.persistence.student.StudentEntity
import com.degree.persistence.user.UserEntity
import com.degree.persistence.project.ProjectEntity
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonManagedReference
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import java.util.*
import javax.validation.constraints.Email
import javax.validation.constraints.NotEmpty

@Entity(name = "teacher")
class TeacherEntity(
        @field:NotEmpty
        var name: String? = null,

        @field:NotEmpty
        var firstName: String? = null,

        @field:NotEmpty
        var lastName: String? = null,

        @field:NotEmpty
        var pass: String? = null,

        @Column(unique = true)
        @field:NotEmpty
        @field:Email
        var email: String? = null,

        @JsonIgnoreProperties("teacher")
        @OneToMany(mappedBy= "teacher", cascade = [CascadeType.ALL])
        var students: MutableList<StudentEntity>? = null,

        @OneToMany(mappedBy= "teacher", cascade = [CascadeType.ALL])
        var projects: MutableList<ProjectEntity>? = null,

        @field:JsonIgnore
        var jwtHash: String? = null

) : TimestampedEntity(), UserDetails {
        override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
                val authorities = mutableListOf<GrantedAuthority>()
                authorities.add(SimpleGrantedAuthority("authorised"))
                return authorities
        }

        @JsonIgnore
        override fun isEnabled(): Boolean = true

        @JsonIgnore
        override fun getUsername(): String = this.name!!

        @JsonIgnore
        override fun getPassword(): String = this.pass!!

        @JsonIgnore
        override fun isCredentialsNonExpired(): Boolean = true

        @JsonIgnore
        override fun isAccountNonExpired(): Boolean = true

        @JsonIgnore
        override fun isAccountNonLocked(): Boolean = true

        @PrePersist
        override fun prePersist() {
                super.prePersist()

        }
}

