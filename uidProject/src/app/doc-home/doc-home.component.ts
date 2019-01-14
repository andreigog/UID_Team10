import {Component, OnInit} from '@angular/core';
import {InfoService} from '../service/info.service';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.css']
})
export class DocHomeComponent implements OnInit {

  patients: string[];
  doc: string;

  constructor(private info: InfoService) {
  }

  ngOnInit() {
    this.doc = this.info.docUser;
    this.patients = [
      'John Doe', 'Harry Poter', 'Jane Doe', 'Ionica Tedica', 'Ioshka Patroshka', 'Cutie Patootie'
    ];
  }

  examine(p: string) {
    alert(p);
  }

}
