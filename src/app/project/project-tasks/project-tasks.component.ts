import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Task, Project, User } from '../../models';
import { ProjectService } from "../../shared/services/project.service";

@Component({
  selector: 'project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent {

  @Input() user: User;
  @Input() project: Project;
  selectedTask: Task = null;
  errorMessage: string = null;

  constructor(private projectService: ProjectService,
    private router: Router) { }

  getDefaultTask(project) {
    return project ? Task.getDefault(project.tasks.length, null, false, false) : null
  }

  choseTask(selectedTask: Task) {
    this.selectedTask = selectedTask;
  }

}
