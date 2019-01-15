import {Component, OnInit} from '@angular/core';
import {InfoService} from '../service/info.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private info: InfoService) {
  }

  docs: string[];
  domains: string[];
  checked = 'fa fa-star checked';
  unchecked = 'fa fa-star';
  rated: boolean;
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
  s: number;
  doc: string;
  dom: string;
  com: string;
  message: string;

  

  ngOnInit() {
    
    this.docs = this.info.docs;
    this.domains = this.info.domain;
    this.s1 = this.unchecked;
    this.s2 = this.unchecked;
    this.s3 = this.unchecked;
    this.s4 = this.unchecked;
    this.s5 = this.unchecked;
    this.rated = false;
  }

  chooseDoc(event: any) {
    this.doc = event.target.value;
  }

  chooseDom(event: any) {
    this.dom = event.target.value;
  }

  chooseCom(event: any) {
    this.com = event.target.value;
  }

  change(s: number) {
    if (s === 1) {
      if (this.s1 === this.checked) {
        this.s1 = this.unchecked;
        this.s = 0;
      } else {
        this.s1 = this.checked;
        this.s = 1;
      }
      this.s2 = this.unchecked;
      this.s3 = this.unchecked;
      this.s4 = this.unchecked;
      this.s5 = this.unchecked;
    } else if (s === 2) {
      this.s1 = this.checked;
      this.s2 = this.checked;
      this.s3 = this.unchecked;
      this.s4 = this.unchecked;
      this.s5 = this.unchecked;
      this.s = 2;
    } else if (s === 3) {
      this.s1 = this.checked;
      this.s2 = this.checked;
      this.s3 = this.checked;
      this.s4 = this.unchecked;
      this.s5 = this.unchecked;
      this.s = 3;
    } else if (s === 4) {
      this.s1 = this.checked;
      this.s2 = this.checked;
      this.s3 = this.checked;
      this.s4 = this.checked;
      this.s5 = this.unchecked;
      this.s = 4;
    } else if (s === 5) {
      this.s1 = this.checked;
      this.s2 = this.checked;
      this.s3 = this.checked;
      this.s4 = this.checked;
      this.s5 = this.checked;
      this.s = 5;
    }
  }

  rate() {
    this.rated = true;
    this.message = 'Thank you for rating Dr. ' + this.doc.substring(2, this.doc.length) +
      ' from ' + this.dom + ', giving him/her ' + this.s + ' stars. \n Your comment: ' + this.com;
  }

}
