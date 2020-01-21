import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogRef,MatFormFieldModule} from '@angular/material';
//import {AddService} from './add.service'
import {Form} from '@angular/forms'
import {TodoService} from '../task/todo.service';
import {task} from '../task/task-model';
import{AuthenticationService} from '../authentication.service'
import {ModalService} from '../_modal/modal.service'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  task: task = {
    _id: null,
    email: null,
    taskname: null,
    description: null,
    completed: false,
    created_date: null,
    modified_date: null,
    due_date: null
  };
  constructor(private todo: TodoService, private modalService: ModalService,public auth: AuthenticationService) { }
  onAdd() {
    this.task.email=this.auth.getUserDetails().sub;
    this.todo.Add(this.task).subscribe(() => {
      
    }, (err) => {
      console.error(err);
    }); 
   // this.thisDialogRef.close();
   this.modalService.close('custom-modal-1');
  }
  ngOnInit() {
  }
  

}
