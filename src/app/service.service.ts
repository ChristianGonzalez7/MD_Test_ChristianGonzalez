import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  username: string;
  password: string;

  constructor() { }


  register (username: string, password: string) {
    localStorage.setItem(username, password);
  }

  clearLocalStorage () {
    localStorage.clear();
  }

  login (username: string, password: string) {
    let getPassword = localStorage.getItem(username);
    if (getPassword === password) {
      return (true);
    } else {
      alert('Wrong username/password')
    }
}

}
