import {Component, OnInit} from '@angular/core';
import {InfoService} from '../service/info.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  patients: string[];
  dates: string[];
  selectedPatient: string;
  selectedDate: string;
  rec: string;
  meds: string;
  message: string;

  constructor(private info: InfoService,private snackBar: MatSnackBar) {
    this.meds = '';
  }

  ngOnInit() {
    this.patients = this.info.patients;
    this.dates = this.info.dates;
    this.rec = "- Not too much physical effort.- No alcohol."
  }

  setPatient(event: any) {
    this.selectedPatient = event.target.value;
  }

  setDate(event: any) {
    this.selectedDate = event.target.value;
  }

  setRecommendation(event: any) {
    this.rec = event.target.value;
  }

  addMed(s: string) {
    this.meds += '\n' + s;
    this.openSnackBar('Added '+s, '');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      direction: 'ltr',
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }


  makeapp() {
      this.message = 'The appointment report for patient ' + this.selectedPatient+
      ' from: '+this.selectedDate + ' has been saved with the following notes '+
      this.rec+ ' and the follwing medication: '+this.meds;
      this.info.messagePrescription=this.message;

  }

}
