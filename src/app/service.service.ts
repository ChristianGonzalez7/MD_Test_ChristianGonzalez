import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  username: string;
  password: string;

  constructor(private http: HttpClient) {
   }

  // register username and password in localstorage
  register (username: string, password: string) {
    localStorage.setItem(username, password);
  }

  // check if username and password matches with localstorage info
  login (username: string, password: string) {
    const getPassword = localStorage.getItem(username);
    if (getPassword === password) {
      return (true);
    } else {
      alert('Wrong username/password')
    }
  };

  // brings a list of starships in swapi's web
  listOfShips (url: string) {
    return this.http.get(url).toPromise();
  }

}
