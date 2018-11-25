import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { TaskPanelComponent } from "./components/task-panel/task-panel.component";

import { UserService } from "./services/user.service";
import { TaskService } from "./services/task.service";
import { ProjectService } from "./services/project.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    ColorPickerModule
  ],
  exports: [
    AddTaskComponent,
    TaskItemComponent,
    TaskPanelComponent
  ],
  declarations: [
    AddTaskComponent,
    TaskItemComponent,
    TaskPanelComponent
  ],
  providers: [
    UserService,
    TaskService,
    ProjectService
  ]
})
export class SharedModule { }
