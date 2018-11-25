import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Task, Category, User } from '../models';
import { UserService } from "../shared/services/user.service";
import { TaskService } from "../shared/services/task.service";


@Component({
  selector: 'calendar-content',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  user: User;
  viewDate: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  errorMessage: string = null;

  constructor(private userService: UserService,
    private taskService: TaskService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(
        res => {
          this.user = res;
        }
      );
  }

  getMonthName(viewDate: Date) {
    return viewDate.toLocaleString("en-us", { month: "long" });
  }

  changeMonth(add: number) {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + add + 1, 0);
  }

}
