import {Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-daysoff',
  templateUrl: './daysoff.component.html',
  styleUrls: ['./daysoff.component.css']
})
export class DaysoffComponent implements OnInit {
  private selectFormControl: FormControl;
  days: number[];
  date: number;
  comment: string;
  done: boolean;
  err: boolean;
  message: string;
  selectedDate:any;
  selectedDate2:any;

  constructor() {
  }

  ngOnInit() {
    this.selectFormControl = new FormControl('', Validators.required);
    this.done = false;
    this.err = false;
    this.date = 0;
    this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  }

  choose(n: number) {
    this.date = n;
  }

  onEnter(com: string) {
    this.comment = com;
    if (this.selectedDate ==null) {
      this.err = true;
      this.done = false;
      this.message = 'You must select a day from the calendar by clicking it!';
    } else {
      this.done = true;
      this.err = false;
      this.message ="Interval selected for your days off is from " +this.formatDate(this.selectedDate) + " to " + this.formatDate(this.selectedDate2)+ " Comment:" + this.comment;
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

}
