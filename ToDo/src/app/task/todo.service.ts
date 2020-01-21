import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {AuthenticationService} from '../authentication.service'
//import {ListComponent} from './list/list.component'
import {task} from './task-model'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient,public auth: AuthenticationService) { }
  public list(): Observable<Array<task>>{
    let email=this.auth.getUserDetails().sub;
    const tasks$=this.http.get<task[]>('http://localhost:8080/tasks/'+email);
    return tasks$;                     
  }
  public Add(Task:task): Observable<Array<task>>{
    
    //console.log();
    const tasks$=this.http.post<task[]>('http://localhost:8080/tasks',Task);
    return tasks$;                     
  }
  public update(Task:task): Observable<Array<task>>{
    
    console.log();
    const tasks$=this.http.put<task[]>('http://localhost:8080/tasks/'+Task._id,Task);
    return tasks$;                     
  }
  public delete(Task:task): Observable<Array<task>>{
    
    console.log();
    const tasks$=this.http.delete<task[]>('http://localhost:8080/tasks/'+Task._id);
    return tasks$;                     
  }
}
