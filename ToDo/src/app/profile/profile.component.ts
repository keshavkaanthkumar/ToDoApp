import { Component, OnInit } from '@angular/core';

import { AddTaskComponent } from '../add-task/add-task.component';
import { ModalService } from '../_modal/modal.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
  onclickAdd(id: string) {
    // let dialogRef = this.dialog.open(AddTaskComponent , {
    //  // height: '400px',
    //   width: '600px',
    // });
    this.modalService.open(id,null);
  }
  openModal(id: string) {
    // let dialogRef = this.dialog.open(AddTaskComponent , {
    //  // height: '400px',
    //   width: '600px',
    // });
    this.modalService.open(id,null);
  }

}

// @Component({
//   selector: 'modalTest.component',
//   templateUrl: 'modalTest.component.html',
//   //styleUrls: ['./modal.component.scss']
// })
// export class ModalTestComponent {

//   constructor(public dialogRef: MatDialogRef<ModalTestComponent>) { }
//   onNoClick():void{
//     this.dialogRef.close();
//   }

// }

