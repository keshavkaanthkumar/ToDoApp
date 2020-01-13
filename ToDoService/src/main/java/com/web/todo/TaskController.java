package com.web.todo;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.todo.model.Task;
import com.web.todo.repository.ResourceNotFoundException;
import com.web.todo.repository.ToDoRepository;

@RestController
@RequestMapping("/api")
public class TaskController {
@Autowired
ToDoRepository toDoRepository;
@GetMapping("/tasks")
public List<Task> getAllTasks() {
    return toDoRepository.findAll();
}
@PostMapping("/tasks")
public Task createTask(@Valid @RequestBody Task task) {
    return toDoRepository.save(task);
}
//Get a Single Note
@GetMapping("/tasks/{id}")
public Task getNoteById(@PathVariable(value = "id") Long taskId) {
 return toDoRepository.findById(taskId)
         .orElseThrow(() -> new ResourceNotFoundException("Task", "id", taskId));
}
@PutMapping("/tasks/{id}")
public Task updateNote(@PathVariable(value = "id") Long noteId,
                                        @Valid @RequestBody Task taskDetails) {

    Task task = toDoRepository.findById(noteId)
            .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));

    task.setTaskname(taskDetails.getTaskname());
    task.setDescription(taskDetails.getDescription());
    task.setCompleted(taskDetails.isCompleted());
    task.setDue_date(taskDetails.getDue_date());

    Task updatedNote = toDoRepository.save(task);
    return updatedNote;
}
@DeleteMapping("/tasks/{id}")
public ResponseEntity<?> deleteNote(@PathVariable(value = "id") Long noteId) {
    Task task = toDoRepository.findById(noteId)
            .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));

    toDoRepository.delete(task);

    return ResponseEntity.ok().build();
}
}
