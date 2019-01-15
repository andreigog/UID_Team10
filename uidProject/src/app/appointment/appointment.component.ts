import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {InfoService} from '../service/info.service';
import {Doctor} from '../service/doctor';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  private selectFormControl: FormControl;
  docs: Doctor[];
  domains: string[];
  doc: string;
  dom: string;
  temp: number;
  selected: boolean;
  done: boolean;
  date: number;
  message: string;
  selectedDate:Date;
  hours:string[];
  selectedHour:any;
  hour:any;

  constructor(private info: InfoService,private snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
      direction: 'ltr',
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  ngOnInit() {
    if(this.info.messagePrescription!=null){
    this.openSnackBar("You have a new prescription with the following specs: "+this.info.messagePrescription,"");}
    this.hours=['12 AM',"1 PM","2 PM","3 PM","4 PM","5 PM","6 PM"]
    this.selected = false;
    this.done = false;
    this.temp = 0;
    this.docs = this.info.filteredDocs;
    this.domains = this.info.domain;
    this.selectFormControl = new FormControl('', Validators.required);
  }

  chooseDoc(event: any) {
    console.log(event.target.value);
    this.doc = event.target.value;
    this.temp += 1;
    console.log(this.doc.toString());
  }

  chooseDom(event: any) {
    this.dom = event.target.value;
    this.temp += 1;
    this.info.performfilter(this.dom);
    this.docs = this.info.filteredDocs;
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
    console.log(this.doc);
    this.temp=3;
    if (this.temp !== 3) {
      this.selected = true;
      this.message = 'Please complete all the fields in order to make your appointment!';
    } else {
      this.message = 'Your appointment: for dr. ' + this.doc+ ' (' + this.dom + ') on ' + this.formatDate(this.selectedDate) + ' at '+ this.hour;
    }
  }
  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  

  reloadPage() {
    window.location.reload();
  }
}
