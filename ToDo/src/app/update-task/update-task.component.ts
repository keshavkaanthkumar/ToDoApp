import { Component, OnInit, Inject, Input } from '@angular/core';
//import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {task} from '../task/task-model';
import {TodoService} from '../task/todo.service'
import {ModalService} from '../_modal/modal.service'

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
 
  // constructor(@Inject(MAT_DIALOG_DATA) public data: task,public thisDialogRef: MatDialogRef<UpdateTaskComponent>,private todo: TodoService) { 
  //   this.task=data;
  // }
 @Input() Task:task;
  
  
  constructor(private todo: TodoService, private modalService: ModalService) { 
     
   // this.task=this.Task;
  }

  ngOnInit() {
    //this.task=this.clickedTask;
  }
  update(){
    console.log(this.Task.taskname);
    this.todo.update(this.Task).subscribe(() => {
      
    }, (err) => {
      console.error(err);
    }); 
    //this.thisDialogRef.close();
    this.modalService.close('custom-modal-2');
  }
  delete(){
    console.log(this.Task.taskname);
    this.todo.delete(this.Task).subscribe(() => {
      
    }, (err) => {
      console.error(err);
    }); 
    //this.thisDialogRef.close();
    this.modalService.close('custom-modal-2');
  }
   
  
 
  

}
