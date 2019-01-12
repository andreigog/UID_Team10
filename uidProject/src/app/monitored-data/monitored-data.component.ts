import { Component, OnInit, Input } from '@angular/core';
import {take} from 'rxjs/operators';  
import { timer } from 'rxjs';

@Component({
  selector: 'app-monitored-data',
  templateUrl: './monitored-data.component.html',
  styleUrls: ['./monitored-data.component.css']
})
export class MonitoredDataComponent implements OnInit {

  @Input() monitored:any = { beatsMin:'',bloodPres:'',nrSteps:''}

  constructor() { }

  ngOnInit() {
    this.monitored.beatsMin=90;
    this.monitored.bloodPres='120 with 80';
    this.monitored.nrSteps=1200;
  }

}
