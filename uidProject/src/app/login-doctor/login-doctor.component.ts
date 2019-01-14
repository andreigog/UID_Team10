import {Component, OnInit} from '@angular/core';
import {InfoService} from '../service/info.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {

  constructor(private info: InfoService, private route: Router) {
  }

  doc: string;

  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yourColor';
    window.document.body.style.backgroundColor = '#353740';
  }

  login() {
    this.info.docUser = this.doc;
    this.route.navigate(['docHome']);
  }
}
