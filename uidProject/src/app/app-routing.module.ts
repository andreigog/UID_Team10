import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocHomeComponent} from './doc-home/doc-home.component';
import {DaysoffComponent} from './daysoff/daysoff.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
