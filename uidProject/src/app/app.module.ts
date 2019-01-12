import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { RouterModule, Routes } from '@angular/router';
import {DocHomeComponent} from './doc-home/doc-home.component';
import {DaysoffComponent} from './daysoff/daysoff.component';
import { GdprConsentComponent } from './gdpr-consent/gdpr-consent.component';
import { MonitoredDataComponent } from './monitored-data/monitored-data.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ReportComponent} from './report/report.component';
import {MonitoreddataComponent} from './monitoreddata/monitoreddata.component';
import {ReviewComponent} from './review/review.component';

const appRoutes: Routes = [
  {
    path: 'loginDoctor',
    component: LoginDoctorComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'loginPatient',
    component: LoginPatientComponent,
    data: {title: 'Product List'}
  },
  {
    path: 'docHome',
    component: DocHomeComponent
  },
  {
    path: 'daysoff',
    component: DaysoffComponent
  },
  {
    path: 'monitored',
    component: MonitoredDataComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'monitored',
    component: MonitoreddataComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPatientComponent,
    LoginDoctorComponent,
    DocHomeComponent,
    DaysoffComponent,
    GdprConsentComponent,
    MonitoredDataComponent
    ReportComponent,
    MonitoreddataComponent,
    ReviewComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
