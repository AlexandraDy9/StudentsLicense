package com.degree.service

import com.degree.persistence.PersistenceModule
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import

@Configuration
@ComponentScan
@Import(PersistenceModule::class)
class ServiceModule