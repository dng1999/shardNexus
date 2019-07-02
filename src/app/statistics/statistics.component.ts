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
  totalBonus;

  constructor(
    private saveDataSerice: SaveDataService
  ) { 
    this.items = this.saveDataSerice.getItems();
    this.shard = this.saveDataSerice.getShard();
    this.totalBonus = this.saveDataSerice.getTotalBonus();
  }

  ngOnInit() {
  }

}