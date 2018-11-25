import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User, Project, Task } from '../models';
import { UserService } from "../shared/services/user.service";



@Component({
  selector: 'project-content',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  user: User;
  selectedProject: Project;
  newProjectName: string = '';

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(
        res => {
          this.user = res;
        }
      );
  }

  addProject() {
    let newProject = new Project(null, this.newProjectName, new Array<Task>());
    this.userService.addProject(newProject)
      .subscribe(
        res => {
          this.user.projects.push(res);
          this.newProjectName = '';
        }
      );
  }

  chooseProject(selectedProject: Project) {
    this.selectedProject = selectedProject;
  }
}
