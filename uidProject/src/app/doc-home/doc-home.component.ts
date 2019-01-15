import {Component, OnInit, ElementRef} from '@angular/core';
import {InfoService} from '../service/info.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.css']
})
export class DocHomeComponent implements OnInit {

  patients: string[];
  doc: string;
  patient: string;

  constructor(private info: InfoService,private elementRef: ElementRef,private route:Router) {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

  ngOnInit() {
    this.doc = localStorage.getItem("username");
    this.patients = [
      'John Doe', 'Harry Potter', 'Jane Doe', 'Ionica Tedica', 'Ioshka Patroshka', 'Cutie Patootie'
    ];
  }

  examine(p: string) {
    this.info.changeMessage(this.patients.indexOf(p, 0).toString());
    this.route.navigate(['/monitoredData']);
    alert(p + this.patients.indexOf(p, 0).toString());
  }

}
