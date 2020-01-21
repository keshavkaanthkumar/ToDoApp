package com.web.todo.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.web.todo.model.Task;

public interface ToDoRepository extends JpaRepository<Task, Long> {

	@Query(value = "select * from todoapp.task where email = ?", nativeQuery = true)
    ArrayList<Task> findtaskswithemail(String email);
	@Query(value="Select email from todoapp.task WHERE TO_DAYS(NOW()) - TO_DAYS(due_date) >= 0 AND completed=false"
			, nativeQuery = true)
	  ArrayList<String> findtaskswithexpireddate();
}
