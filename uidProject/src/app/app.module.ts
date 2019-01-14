import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPatientComponent} from './login-patient/login-patient.component';
import {LoginDoctorComponent} from './login-doctor/login-doctor.component';
import {RouterModule, Routes} from '@angular/router';
import {DocHomeComponent} from './doc-home/doc-home.component';
import {DaysoffComponent} from './daysoff/daysoff.component';
import {GdprConsentComponent} from './gdpr-consent/gdpr-consent.component';
import {MonitoredDataComponent} from './monitored-data/monitored-data.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ReportComponent} from './report/report.component';
import {MonitoreddataComponent} from './monitoreddata/monitoreddata.component';
import {ReviewComponent} from './review/review.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from '@agm/core';

const appRoutes: Routes = [
  {
    path: 'loginDoctor',
    component: LoginDoctorComponent,
    data: {title: 'Product List'}
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
    path: 'monitoredData',
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
    path: 'gdpr',
    component: GdprConsentComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPatientComponent,
    LoginDoctorComponent,
    DocHomeComponent,
    DaysoffComponent,
    GdprConsentComponent,
    MonitoredDataComponent,
    ReportComponent,
    MonitoreddataComponent,
    ReviewComponent,
    MapComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBLIjjbs8HVnGM2nxmngm6Rcx-soUgWsks'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
