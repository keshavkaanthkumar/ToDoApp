package com.web.todo;

import java.util.ArrayList;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.web.todo.repository.ToDoRepository;
import com.web.todo.util.*;
@SpringBootApplication
@EnableScheduling
@EnableJpaAuditing

public class ToDoServiceApplication {
	@Autowired
	ToDoRepository toDoRepository;
	public static void main(String[] args) {
		SpringApplication.run(ToDoServiceApplication.class, args);
		
		
	}
//	@Bean
//	InitializingBean sendDatabase() {
//	    return () -> {
//	    	BeeperControl beeperControl=new BeeperControl();
//	    	ArrayList<String> emails=toDoRepository.findtaskswithexpireddate();
//	    	beeperControl.beep(emails);
//	      };
//	   }
	}



