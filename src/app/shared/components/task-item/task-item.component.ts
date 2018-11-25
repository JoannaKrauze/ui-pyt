import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Task } from '../../../models';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Input() selected: Boolean = false;

  errorMessage: string = null;

  constructor(
    private taskService: TaskService,
    private router: Router) {
  }

  ngOnInit() {
  }

  changeIsDone() {
    this.task.isDone = !this.task.isDone;
    this.saveTask();
  }

  changeIsImportant() {
    this.task.isImportant = !this.task.isImportant;
    this.saveTask();
  }

  saveTask() {
    this.taskService.save(this.task)
      .subscribe(
        res => {
          this.task.isDone = res.isDone;
          this.task.isImportant = res.isImportant;
        }
      );
  }
}
