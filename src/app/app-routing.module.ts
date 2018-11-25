import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { TaskModule } from './task/task.module';
import { ImportantModule } from './important/important.module';
import { CategoryModule } from './category/category.module';
import { ProjectModule } from './project/project.module';
import { CalendarModule } from './calendar/calendar.module';
// import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: () => LoginModule },
  { path: 'tasks', loadChildren: () => TaskModule },
  { path: 'important', loadChildren: () => ImportantModule },
  { path: 'categories', loadChildren: () => CategoryModule },
  { path: 'projects', loadChildren: () => ProjectModule },
  { path: 'calendar', loadChildren: () => CalendarModule },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
