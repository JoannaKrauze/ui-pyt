import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Task } from '../../models';

@Injectable()
export class ProjectService {

  private id: number = 15;

  constructor(
    private http: HttpClient
  ) { }

  getProject(id: number): Observable<User> {
    return this.http.get<User>("projects" + id);
  }

  addTask(id: number, task: Task): Observable<Task> {
    return this.http.post<Task>("projects/" + id + '/tasks', task);
  }

}
