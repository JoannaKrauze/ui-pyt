import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportantComponent } from "./important.component";

const routes: Routes = [
  { path: '', component: ImportantComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportantRoutingModule { }
