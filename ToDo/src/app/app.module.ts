import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http'
import { HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DatePipe } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import {MatIconModule, MatButtonModule,MatToolbarModule, MatCardModule,  MatFormFieldModule, MatProgressSpinnerModule, MatInputModule} from '@angular/material';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ModalComponent } from './_modal/modal.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component'
import {AuthenticationService} from './authentication.service'
import {AuthGuardService} from './auth-guard.service'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AppComponent,
    ListComponent,
    HomeComponent,
    ProfileComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    ModalComponent,
    
    
  ],
  imports: [
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule, FormsModule, ReactiveFormsModule,MatInputModule
    
    
  ],
 
  providers: [DatePipe,HomeComponent,AuthenticationService, 
    AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [AddTaskComponent,UpdateTaskComponent]
})
export class AppModule { }
