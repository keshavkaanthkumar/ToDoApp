package com.web.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.todo.model.Task;

public interface ToDoRepository extends JpaRepository<Task, Long> {

}
