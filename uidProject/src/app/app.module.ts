import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'loginDoctor',
    component: LoginDoctorComponent,
    data: { title: 'Product List' }
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
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
