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

  constructor(private service: ServiceService) {
    this.showList = true;
   }

  async ngOnInit() {
    const request = await this.service.listOfShips('https://swapi.dev/api/starships/?page=1');
    this.shipList = request['results'];
    this.nextUrl = request['next'];
    this.previousUrl = request['previous'];
  }

  async nextButton () {
    const request = await this.service.listOfShips(this.nextUrl);
    this.shipList = request['results'];
    this.nextUrl = request['next'];
    this.previousUrl = request['previous'];
    console.log(this.shipList);
    console.log(this.actualUrl);
  }

  async previousButton () {
    // this.actualUrl = await this.service.listOfShips(`${this.actualUrl}`)['previous'];
    // let request = await this.service.listOfShips(`${this.actualUrl}`);
    // this.shipList = request['results'];
  }

}
