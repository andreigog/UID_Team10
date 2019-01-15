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
  userRole;
  username;
  localStorage;
  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.localStorage = localStorage;
        console.log(val.url);
        this.showNavbar = (val.url.slice(1) !== 'loginPatient') && (val.url.slice(1) !== 'loginDoctor');
        this.username = localStorage.getItem('username');
        this.userRole = localStorage.getItem('userRole');
      }
    });
  }

  logout() {
    localStorage.removeItem('username');
    if (this.userRole==='patient'){
      localStorage.removeItem('userRole');
      this.router.navigate(['/loginPatient']);
    } else {
      localStorage.removeItem('userRole');
      this.router.navigate(['/loginDoctor']);
    }
  }
}
