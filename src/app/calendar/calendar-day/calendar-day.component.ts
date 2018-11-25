import { Component, Input, OnChanges } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent {

  @Input() day: number;
  @Input() selected: number;

}
