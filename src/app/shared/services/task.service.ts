import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Task, Comment } from "../../models";
//
@Injectable()
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  save(task: Task): Observable<Task> {
    return this.http.post<Task>("tasks", task);
  }

  addComment(id: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>("tasks/" + id + '/comments', comment);
  }

  setCategory(id: number, categoryId: number): Observable<Category> {
    return this.http.put<Category>("tasks/" + id + '/category', categoryId);
  }

}
