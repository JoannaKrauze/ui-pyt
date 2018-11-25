import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { httpInterceptorProviders } from "../shared/interceptors";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginService } from "../shared/services/login.service";
import { UserService } from "../shared/services/user.service";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoginRoutingModule],
  providers: [LoginService,
    UserService,
    httpInterceptorProviders
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
