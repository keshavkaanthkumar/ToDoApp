import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {task} from '../task/task-model';
import {TodoService} from '../task/todo.service'
import {MatListModule, MatDialog, MatDialogRef} from '@angular/material'
import {UpdateTaskComponent} from '../update-task/update-task.component'
import {ModalService} from '../_modal/modal.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks: Array<task>;
  taskObj: task;
 
  // @Output() updateEvent = new EventEmitter<task>(); 
  constructor(private todo: TodoService,private modalService: ModalService) {

    
}

  ngOnInit() {
    this.todo.list().subscribe(tasks =>{
      this.tasks=tasks;
    })
  }
  // update(task:task){
  //   let dialogRef = this.dialog.open( UpdateTaskComponent, {
  //     // height: '400px',
  //      width: '600px',
  //      data: task
  //    });
  // }

  openModal(id: string,clickedtask: task){
  //  this.task.emit(clickedtask);
  //this.updateEvent.emit(clickedTask);
  //this.t
this.modalService.open(id, clickedtask);
  }

}
