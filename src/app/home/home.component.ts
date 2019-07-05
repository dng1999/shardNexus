import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private saveDataService: SaveDataService
  ) { }

  ngOnInit() {
  }

  //tell service to call addShard()
  addShard() {
    this.saveDataService.addShard();
  };

  //tell service to call addItem()
  addItem(name) {
    this.saveDataService.addItem(name);
  };

  //tell service to call addBoost()
  addBoost(name) {
    this.saveDataService.addBoost(name);
  };
}