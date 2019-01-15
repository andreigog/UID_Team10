import {Component, OnInit, ElementRef} from '@angular/core';
import {InfoService} from '../service/info.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {

  constructor(private info: InfoService, private route: Router, private elementRef: ElementRef, private snackBar: MatSnackBar) {
  }

  doc: string;
  username: string;
  password: string;

  ngOnInit() {
    this.username = ''; // init inputs - empty strings
    this.password = '';
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#353740';
  }

  login() {
    this.info.docUser = this.doc;
    if (this.username === 'mockDoc' && this.password === 'mockPass') {
        this.openSnackBar('Login successful!', '');
        localStorage.setItem('username', this.username);
        localStorage.setItem('userRole', 'doctor');
        this.route.navigate(['/docHome']);
      } else {
        this.openSnackBar('Wrong username or password', '');
      }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      direction: 'ltr',
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
