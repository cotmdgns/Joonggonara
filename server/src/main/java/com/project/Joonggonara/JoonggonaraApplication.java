package com.project.Joonggonara;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("mapper")
public class JoonggonaraApplication {

	public static void main(String[] args) {
		SpringApplication.run(JoonggonaraApplication.class, args);
	}

}
