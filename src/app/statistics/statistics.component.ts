import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  items;
  shard;
  boost;

  constructor(
    private saveDataService: SaveDataService
  ) { 
    this.items = this.saveDataService.getItems();
    this.shard = this.saveDataService.getShard();
    this.boost = this.saveDataService.getBoost();
  }

  ngOnInit() {
  }

}