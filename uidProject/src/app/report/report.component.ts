import {Component, OnInit} from '@angular/core';
import {InfoService} from '../service/info.service';

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

  constructor(private info: InfoService) {
    this.meds = '';
  }

  ngOnInit() {
    this.patients = this.info.patients;
    this.dates = this.info.dates;
  }

  pat() {
    alert(this.selectedPatient + ' ' + this.selectedDate + ' ' + this.rec + ' ' + this.meds);
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
  }

}
