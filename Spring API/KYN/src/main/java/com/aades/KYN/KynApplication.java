package com.aades.KYN;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.aades.KYN")
@EntityScan("com.aades.KYN.entities")
@EnableJpaRepositories("com.aades.KYN.repo")
public class KynApplication {

	public static void main(String[] args) {
		SpringApplication.run(KynApplication.class, args);
	}

}
