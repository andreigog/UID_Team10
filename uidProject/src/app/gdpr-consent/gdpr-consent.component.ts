import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gdpr-consent',
  templateUrl: './gdpr-consent.component.html',
  styleUrls: ['./gdpr-consent.component.css']
})
export class GdprConsentComponent implements OnInit {

  rated:boolean;
  message:string;
  constructor() { }

  ngOnInit() {
    this.rated=false;
  }
  switch(){
    this.rated=!this.rated;
    this.message="You agree with the processing of data related to gdpr terms";
  }

}
