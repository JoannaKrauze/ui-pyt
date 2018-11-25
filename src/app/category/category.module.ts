import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { httpInterceptorProviders } from "../shared/interceptors";
import { UserService } from "../shared/services/user.service";
import { TaskService } from "../shared/services/task.service";
import { CategoryRoutingModule } from "./category-routing.module";
import { SharedModule } from "../shared/shared.module";

import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CategoryRoutingModule
  ],
  providers: [
    UserService,
    TaskService,
    httpInterceptorProviders
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
