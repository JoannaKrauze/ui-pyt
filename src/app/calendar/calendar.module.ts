import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { httpInterceptorProviders } from "../shared/interceptors";
import { UserService } from "../shared/services/user.service";
import { CalendarRoutingModule } from "./calendar-routing.module";
import { SharedModule } from "../shared/shared.module";

import { CalendarComponent } from "./calendar.component";
import { CalendarDayComponent } from "./calendar-day/calendar-day.component";
import { CalendarMonthComponent } from "./calendar-month/calendar-month.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CalendarRoutingModule],
  providers: [
    UserService,
    httpInterceptorProviders
  ],
  declarations: [CalendarComponent, CalendarDayComponent, CalendarMonthComponent]
})
export class CalendarModule { }
