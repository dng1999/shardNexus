import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //need to have save data here for corresponding html
  shard;
  items;
  error;

  constructor (
    private saveDataService: SaveDataService
  ) { 
    this.shard = this.saveDataService.getShard();
    this.items = this.saveDataService.getItems();
    this.error = this.saveDataService.getError();
  }

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
}