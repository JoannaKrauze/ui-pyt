import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../shared/services/login.service";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show: Boolean = true;

  constructor(private loginService: LoginService,
    private router: Router) {
    router.events
      .subscribe(
        (event: NavigationStart) =>
          this.checkRoute(event))
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout()
      .subscribe(
        res => {
          this.router.navigate(['/login']);

        }
      );
  }

  checkRoute(val) {
    this.show = window.location.pathname != "/login";
  }

}
