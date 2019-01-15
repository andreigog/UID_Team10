import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uidProject';
  showNavbar = false;
  username;
  localStorage;
  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.localStorage = localStorage;
        console.log(val.url);
        this.showNavbar = (val.url.slice(1) !== 'loginPatient') && (val.url.slice(1) !== 'loginDoctor');
        this.username = localStorage.getItem('username')
      }
    });
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/loginPatient']);
  }
}
