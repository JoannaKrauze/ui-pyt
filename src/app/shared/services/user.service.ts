import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Category, Task, Comment, Project } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  isLogged(): Observable<Number> {
    return this.http.get<Number>("user/logged");
  }

  getUser(): Observable<User> {
    return this.http.get<User>("user");
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>("/user/categories", category);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>("/user/tasks", task);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>("/user/projects", project);
  }

}
