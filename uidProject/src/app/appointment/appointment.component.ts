import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {InfoService} from '../service/info.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  private selectFormControl: FormControl;
  docs: string[];
  domains: string[];
  doc: string;
  dom: string;
  temp: number;
  selected: boolean;
  done: boolean;
  date: number;
  message: string;

  constructor(private info: InfoService) {
  }

  ngOnInit() {
    this.selected = false;
    this.done = false;
    this.temp = 0;
    this.docs = this.info.docs;
    this.domains = this.info.domain;
    this.selectFormControl = new FormControl('', Validators.required);
  }

  chooseDoc(event: any) {
    this.doc = event.target.value;
    this.temp += 1;
  }

  chooseDom(event: any) {
    this.dom = event.target.value;
    this.temp += 1;
  }

  choose(p: number) {
    this.date = p;
    this.temp += 1;
  }

  saved() {
    this.done = true;
    this.selected = false;
  }

  makeapp() {
    if (this.temp !== 3) {
      this.selected = true;
      this.message = 'Please complete all the fields in order to make your appointment!';
    } else {
      this.message = 'Your appointment: for dr. ' + this.doc.substring(2, this.doc.length) + ' (' + this.dom + ') on ' + this.date + ' of August ';
    }
  }

  reloadPage() {
    window.location.reload();
  }
}
