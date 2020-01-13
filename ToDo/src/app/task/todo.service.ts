import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
//import {ListComponent} from './list/list.component'
import {task} from './task-model'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  public list(): Observable<Array<task>>{
    const tasks$=this.http.get<task[]>('http://localhost:8080/api/tasks');
    return tasks$;                     
  }
  public Add(Task:task): Observable<Array<task>>{
    
    console.log();
    const tasks$=this.http.post<task[]>('http://localhost:8080/api/tasks',Task);
    return tasks$;                     
  }
  public update(Task:task): Observable<Array<task>>{
    
    console.log();
    const tasks$=this.http.put<task[]>('http://localhost:8080/api/tasks/'+Task._id,Task);
    return tasks$;                     
  }
  public delete(Task:task): Observable<Array<task>>{
    
    console.log();
    const tasks$=this.http.delete<task[]>('http://localhost:8080/api/tasks/'+Task._id);
    return tasks$;                     
  }
}
