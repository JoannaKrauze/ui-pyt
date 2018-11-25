import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Task, User } from '../models';
import { UserService } from "../shared/services/user.service";

@Component({
  selector: 'important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss']
})
export class ImportantComponent implements OnInit {

  user: User;
  selectedTask: Task = null;
  errorMessage: string = null;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(
        res => {
          res.tasks.sort((a, b) => {
            return a.priority - b.priority;
          });
          this.user = res;
        }
      );
  }

  getFilteredTasks() {
    return this.user.tasks.filter((task) => {
      return task.isImportant;
    });
  }

  choseTask(selectedTask: Task) {
    this.selectedTask = selectedTask;
  }

  getDefaultTask(tasks) {
    return tasks ? Task.getDefault(tasks.length, null, true, false) : null;
  }

}
