import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from "../shared/services/login.service";
import { UserService } from "../shared/services/user.service";
import { LoginRequest, SignUpRequest } from "../models";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginRequest: LoginRequest = { email: "aaa", password: "aab" };
  private signUp: SignUpRequest = { name: null, email: null, password: null };

  private view: Boolean = true;

  private loginVisible: Boolean = true;

  errorMessage: string = null;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.errorMessage = null;
    this.userService.getUser().subscribe(
      res => {
        if (res != null) {
          this.router.navigate(['/tasks']);
        } else {
          this.loginVisible = true;
        }
      }
    );
  }

  signIn() {
    this.errorMessage = null;
    this.loginService.signUp(this.signUp).subscribe(
      res => {
        this.router.navigate(['/tasks']);
      },
      error => {
        this.errorMessage = error.statusText;
      }
    );
  }

  login() {
    this.errorMessage = null;
    this.loginService.login(this.loginRequest).subscribe(
      res => {
        this.router.navigate(['/tasks']);
      },
      error => {
        this.errorMessage = error.statusText;
      }
    )
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        this.router.navigate(['/login']);
      }
    );
  }

  changeView(view: Boolean) {
    this.view = view;
  }
}
