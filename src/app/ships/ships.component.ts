import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  previousUrl: string;
  actualUrl: string;
  nextUrl: string;
  showList: boolean;
  shipList: any;
  shipDetail: any;
  httpRequestedDate: any;

  constructor(private service: ServiceService) {
    this.showList = true;
    this.shipDetail = new Object;
   }

  async ngOnInit() {
    this.httpRequestedDate = new Date;

    // brings starships info when entering web for the first time
    const request = await this.service.listOfShips('https://swapi.dev/api/starships/?page=1');
    this.shipList = request['results'];
    this.nextUrl = request['next'];
    this.previousUrl = request['previous'];
  }

  async previousAndNextButtons ($event) {

    const httpActualRequest = new Date;
    const httpLastRequestPlusFive = (this.httpRequestedDate + (5 * 60 * 1000))
    
    // controls that requests should be done every 5 minutes
    if (httpActualRequest > httpLastRequestPlusFive) {
      this.showList = true;
      if ($event.target.dataset.type === 'next') {
        const request = await this.service.listOfShips(this.nextUrl);
        this.shipList = request['results'];
        this.nextUrl = request['next'];
        this.previousUrl = request['previous'];
      } else if ($event.target.dataset.type === 'previous') {
        const request = await this.service.listOfShips(this.previousUrl);
        this.shipList = request['results'];
        this.nextUrl = request['next'];
        this.previousUrl = request['previous'];
      }
    } else {
      this.showList = false;
    }

  }

  // shows detailed info about one particular starship by their id
  async showShipDetail($event) {
    const id = parseInt($event.target.id) + 2;
    this.shipDetail = await this.service.listOfShips(`https://swapi.dev/api/starships/${id}/`);
  }

}
