import { Component, OnInit, Input } from '@angular/core';
import {take} from 'rxjs/operators';  
import { timer } from 'rxjs';
import { InfoService } from '../service/info.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-monitored-data',
  templateUrl: './monitored-data.component.html',
  styleUrls: ['./monitored-data.component.css']
})
export class MonitoredDataComponent implements OnInit {

  private selectFormControl: FormControl;

  @Input() monitored:any = { beatsMin:'',bloodPres:'',nrSteps:''}

  constructor(private info: InfoService) {
  }

  patients: string[];
  selectedPatient: string;
  beatsValue: string;
  pressureValue: string;
  patientNumber: number;
  stepsValue: number;
  bpm = ['67', '80', '110', '50', '99', '167'];
  bp = ['110 with 70', '90 with 60', '170 with 50', '80 with 50', '150 with 90', '160 with 60'];
  stps = [2500, 3000, 4000, 6000, 3400, 5500];
  i: number;
  patientName: string;

  ngOnInit() {
    this.selectFormControl = new FormControl('', Validators.required);
    this.info.currentMessage.subscribe(message => this.selectedPatient = message);
    this.patients = this.info.patients;
    this.patientNumber = Number(this.selectedPatient);

    if (isNaN(this.patientNumber)) {
      this.patientNumber = 0;
    }
    this.patientName = this.patients[this.patientNumber];
    this.patientName = this.patientName.substring(2);

    this.beatsValue = this.bpm[this.patientNumber];
    this.pressureValue = this.bp[this.patientNumber];
    this.stepsValue = this.stps[this.patientNumber];

  }

  choose(event: any) {
    const idd = event.target.value;
    const id = idd.toString().substring(0, 1);
    this.i = Number(id);
    this.patientName = this.patients[this.i - 1];
    this.patientName = this.patientName.substring(2);
    this.beatsValue = this.bpm[this.i - 1];
    this.pressureValue = this.bp[this.i - 1];
    this.stepsValue = this.stps[this.i - 1];
  }

}
