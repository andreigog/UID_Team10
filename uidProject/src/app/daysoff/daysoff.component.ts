import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-daysoff',
  templateUrl: './daysoff.component.html',
  styleUrls: ['./daysoff.component.css']
})
export class DaysoffComponent implements OnInit {
  days: number[];
  date: number;
  comment: string;

  constructor() {
  }

  ngOnInit() {
    this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  }

  choose(n: number) {
    this.date = n;
    // alert(n);
  }

  onEnter(com: string) {
    this.comment = com;
    alert('in ' + this.date + ' isi ia doc concediu: ' + com);
  }

}
