import {Component, OnInit} from '@angular/core';
import {InfoService} from '../service/info.service';

@Component({
  selector: 'app-monitoreddata',
  templateUrl: './monitoreddata.component.html',
  styleUrls: ['./monitoreddata.component.css']
})
export class MonitoreddataComponent implements OnInit {

  constructor(private info: InfoService) {
  }

  patients: string[];
  selectedPatient: string;
  beatsValue: string;
  pressureValue: string;
  stepsValue: number;
  bpm = ['67', '80', '110', '50', '99', '167'];
  bp = ['110 with 70', '90 with 60', '170 with 50', '80 with 50', '150 with 90', '160 with 60'];
  stps = [2500, 3000, 4000, 6000, 3400, 5500];
  i: number;

  ngOnInit() {
    this.patients = this.info.patients;
  }

  choose(event: any) {
    const idd = event.target.value;
    const id = idd.toString().substring(0, 1);
    this.i = Number(id);
    this.beatsValue = this.bpm[this.i - 1];
    this.pressureValue = this.bp[this.i - 1];
    this.stepsValue = this.stps[this.i - 1];
  }

}
