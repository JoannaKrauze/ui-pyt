import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import { Task } from '../../models';

@Component({
  selector: 'calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss']
})
export class CalendarMonthComponent {

  @Input() tasks: Task[];
  @Input() date: Date;
  selected: number;
  daysOfWeek: String[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  constructor(private userService: UserService,
    private router: Router) { }

  getMonthDays(date: Date) {
    let firstDay = 1 - (new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay());
    let daysNumber = Math.ceil((Math.abs(firstDay) + this.date.getDate()) / 7) * 7;

    return Array.from({ length: daysNumber }, (v, index) => this.getDay(firstDay, date.getDate(), index))
  }

  getDay(firstDay: number, lastDay: number, index: number) {
    let day = index + firstDay + 1;
    return day < 1 || day > lastDay ? null : day;
  }

  getTasks(day: number, tasks: Task[]) {
    let itemDate = new Date(this.date).setDate(day);
    return tasks ? tasks.filter(task => task.endDate == itemDate) : [];
  }

  selectDay(day: number) {
    this.selected = day;
  }

  getDefaultTask(date: number, selected: number) {
    return Task.getDefault(this.tasks.length, new Date(date).setDate(selected), false, false);
  }

}
