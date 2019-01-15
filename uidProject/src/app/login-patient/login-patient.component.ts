import {Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

  public termsAndConditionsAccepted: boolean = false;
  public username;
  public password;

  constructor(
    private router: Router, // page routing system - navigation (after correcet credentials for login -> home)
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.username = ''; // init inputs - empty strings
    this.password = '';
  }

  emergency(){
    if (!this.isAccepted()){
      this.openSnackBar('Your emergency has been registered. A medical care team will arrive soon at your location.', '');
    } else {
      this.openSnackBar('Please accept the terms and conditions!', '');
    }
  }

  login() {
    if (this.username === 'mockPatient' && this.password === 'mockPass') {
      this.openSnackBar('Login successful!', '');
      localStorage.setItem('username', this.username);
      localStorage.setItem('userRole', 'patient');
      this.router.navigate(['/appointment']);
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

  toggleCheck() {
    this.termsAndConditionsAccepted = !this.termsAndConditionsAccepted;
  }

  isAccepted() {
    return this.termsAndConditionsAccepted;
  }
}
