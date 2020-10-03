import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  showList: boolean;

  constructor() {
    this.showList = true;
   }

  ngOnInit(): void {
  }

}
