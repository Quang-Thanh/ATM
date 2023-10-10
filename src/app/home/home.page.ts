import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }
  viewAccount() {
    this.router.navigate(['/profile']);
  }
  goCam() {
    this.router.navigate(['/camera']);
  }
  goMap(){
    this.router.navigate(['/map']);
  }
  gologin() {
    this.router.navigate(['/login'])
  }
}



