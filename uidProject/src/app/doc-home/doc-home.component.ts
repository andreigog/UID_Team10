import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.css']
})
export class DocHomeComponent implements OnInit {

  patients: string[];

  constructor() {
  }

  ngOnInit() {
    this.patients = [
      'John Doe', 'Harry Poter', 'Jane Doe', 'Ionica Tedica', 'Ioshka Patroshka', 'Cutie Patootie'
    ];
  }

  examine(p: string) {
    alert(p);
  }

}
