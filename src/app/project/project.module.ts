import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { httpInterceptorProviders } from "../shared/interceptors";
import { UserService } from "../shared/services/user.service";
import { TaskService } from "../shared/services/task.service";
import { ProjectService } from "../shared/services/project.service";
import { ProjectRoutingModule } from "./project-routing.module";
import { SharedModule } from "../shared/shared.module";

import { ProjectComponent } from "./project.component";
import { ProjectTasksComponent } from "./project-tasks/project-tasks.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProjectRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ProjectService,
    TaskService,
    httpInterceptorProviders
  ],
  declarations: [
    ProjectComponent,
    ProjectTasksComponent
  ]
})
export class ProjectModule { }
