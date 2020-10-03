import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  shipsUrl: string;
  showList: boolean;
  shipList: any;
  request: any;

  constructor(private service: ServiceService) {
    this.showList = true;
    this.shipsUrl = 'https://swapi.dev/api/starships/'
   }

  async ngOnInit() {
    this.request = await this.service.listOfShips(this.shipsUrl);
    this.shipList = this.request['results'];
  }

  async nextButton () {
    this.request = await this.service.listOfShips(this.request['next']);
    this.shipList = this.request['results'];
    console.log(this.request);
    console.log(this.shipList);
  }

  async previousButton () {
    this.request = await this.service.listOfShips(this.request['previous']);
    this.shipList = this.request['results'];
  }


}
