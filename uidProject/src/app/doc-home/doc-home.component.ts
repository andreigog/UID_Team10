import {Component, OnInit, ElementRef} from '@angular/core';
import {InfoService} from '../service/info.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.css']
})
export class DocHomeComponent implements OnInit {

  public patients: any[];
  public doc: string;
  public patient: string;
  public data: any[];

  constructor(private info: InfoService,private elementRef: ElementRef,private route:Router) {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

  ngOnInit() {
    this.doc = this.info.docList[0].name;
    this.patients = [
      {"name":"John Doe","color":'red'},
      {"name":"Harry Potter","color":'green'},
      {"name":"Jane Doe","color":'yellow'},
      {"name":"Ionica Tedica","color":'green'},
      {"name":"Ioshka Patroshka","color":'yellow'},
      {"name":"Cutie Patootie","color":'yellow'},
      {"name":"Dor Ian Gor Gan","color":'red'},
    ];
    this.data=["John Doe", "Harry Potter", "Jane Doe", "Ionica Tedica", "Ioshka Patroshka", "Cutie Patootie", "Dor Ian Gor Gan"];
  }

  examine(p: string) {
    this.info.changeMessage(this.data.indexOf(p, 0).toString());
    this.route.navigate(['/monitoredData']);
    //alert(p+ this.data.indexOf(p, 0));
  }

}
