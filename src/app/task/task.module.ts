import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { httpInterceptorProviders } from "../shared/interceptors";
import { SharedModule } from "../shared/shared.module";
import { UserService } from "../shared/services/user.service";
import { TaskRoutingModule } from './task-routing.module';

import { TaskComponent } from './task.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TaskRoutingModule,
    SharedModule],
  providers: [
    UserService,
    httpInterceptorProviders
  ],
  declarations: [TaskComponent]
})
export class TaskModule { }
