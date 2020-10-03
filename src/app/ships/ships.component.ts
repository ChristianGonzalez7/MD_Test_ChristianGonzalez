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

  constructor(private service: ServiceService) {
    this.showList = true;
    this.shipDetail = new Object;
   }

  async ngOnInit() {
    const request = await this.service.listOfShips('https://swapi.dev/api/starships/?page=1');
    this.shipList = request['results'];
    this.nextUrl = request['next'];
    this.previousUrl = request['previous'];
  }

  async previousAndNextButtons ($event) {
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
  }

  async showShipDetail($event) {
    const id = parseInt($event.target.id) + 2;
    this.shipDetail = await this.service.listOfShips(`https://swapi.dev/api/starships/${id}/`);
  }

}
