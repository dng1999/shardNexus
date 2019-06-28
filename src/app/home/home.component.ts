import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  addShard() {
    this.saveDataService.addShard();
  };

  addItem(name) {
    this.saveDataService.addItem(name);
  };
}