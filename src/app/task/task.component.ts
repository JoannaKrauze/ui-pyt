import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../shared/services/user.service";
import { Task, User } from '../models';

@Component({
  selector: 'task-content',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  user: User;
  selectedTask: Task = null;
  errorMessage: string = null;

  constructor(private userService: UserService,
    private router: Router) {
  }

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

  choseTask(selectedTask: Task) {
    this.selectedTask = selectedTask;
  }

  getDefaultTask(tasks) {
    return tasks ? Task.getDefault(tasks.length, null, false, false) : null;
  }

}
