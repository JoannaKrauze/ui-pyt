import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { httpInterceptorProviders } from "../shared/interceptors";
import { CommonModule } from "@angular/common";
import { UserService } from "../shared/services/user.service";
import { TaskService } from "../shared/services/task.service";
import { ImportantRoutingModule } from "./important-routing.module";
import { SharedModule } from "../shared/shared.module";

import { ImportantComponent } from './important.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ImportantRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    TaskService,
    httpInterceptorProviders
  ],
  declarations: [ImportantComponent]
})
export class ImportantModule { }
