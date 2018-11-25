import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private navItems;
  show: Boolean = true;

  constructor(private router: Router) {
    router.events
      .subscribe(
        (event: NavigationStart) =>
          this.checkRoute(event))
  }

  ngOnInit() {
    this.navItems = [
      { path: ['/important'], icon: "fas fa-star", name: "Important" },
      { path: ['/tasks'], icon: "fas fa-tasks", name: "Tasks" },
      { path: ['/categories'], icon: "fas fa-circle", name: "Categories" },
      { path: ['/calendar'], icon: "far fa-calendar-alt", name: "Calendar" },
      { path: ['/projects'], icon: "fas fa-project-diagram", name: "Projects" }
    ];
  }

  checkRoute(val) {
    this.show = window.location.pathname != "/login";
  }

}
