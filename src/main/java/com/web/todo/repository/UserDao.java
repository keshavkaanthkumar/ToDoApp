package com.web.todo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.web.todo.model.DAOUser;



@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {
	
	DAOUser findByemail(String email);
	
}