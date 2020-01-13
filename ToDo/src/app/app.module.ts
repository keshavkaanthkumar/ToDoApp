import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/http'
import { HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DatePipe } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ModalComponent } from './_modal/modal.component'
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
    
    
    
  ],
  providers: [DatePipe,HomeComponent],
  bootstrap: [AppComponent],
  entryComponents: [AddTaskComponent,UpdateTaskComponent]
})
export class AppModule { }
