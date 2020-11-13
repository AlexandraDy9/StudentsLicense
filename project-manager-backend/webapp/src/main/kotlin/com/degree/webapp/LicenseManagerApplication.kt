package com.degree.webapp

import com.degree.service.ServiceModule
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer
import org.springframework.context.annotation.Import


@SpringBootApplication
@Import(ServiceModule::class)
class LicenseManagerApplication: SpringBootServletInitializer() {

	override fun configure(builder: SpringApplicationBuilder): SpringApplicationBuilder {
		return builder.sources(LicenseManagerApplication::class.java)
	}

	companion object{
		@JvmStatic
		fun main(args: Array<String>){
			SpringApplication.run(LicenseManagerApplication::class.java, *args)
		}
	}
}