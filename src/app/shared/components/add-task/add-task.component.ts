import { Component, Input } from '@angular/core';
import { Task } from '../../../models';
import { UserService } from "../../services/user.service";
import { ProjectService } from "../../services/project.service";
import { Router } from "@angular/router";

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Input() defaultTask: Task;
  @Input() tasks: Task[];
  @Input() projectId: number = null;
  newTaskName: string = '';

  constructor(private userService: UserService,
    private projectService: ProjectService,
    private router: Router) { }

  add() {
    if (this.projectId) {
      this.addProjectTask();
    } else {
      this.addTask();
    }
  }

  addTask() {
    this.userService.addTask({ ...this.defaultTask, name: this.newTaskName })
      .subscribe(
        res => {
          this.tasks.push(res);
          this.newTaskName = '';
        }
      );
  }

  addProjectTask() {
    this.projectService.addTask(this.projectId, { ...this.defaultTask, name: this.newTaskName })
      .subscribe(
        res => {
          this.tasks.push(res);
          this.newTaskName = '';
        }
      );
  }
}
