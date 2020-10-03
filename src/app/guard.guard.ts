import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {


  constructor (private router: Router) {}

  canActivate () {
    const logged = localStorage.getItem('logged');
    if (!logged) {
      this.router.navigate(['/login'])
      return false;
    } 
    return true;
  }

}
