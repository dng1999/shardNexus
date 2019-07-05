import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-euphboost',
  templateUrl: './euphboost.component.html',
  styleUrls: ['./euphboost.component.css']
})
export class EuphboostComponent implements OnInit {
  boost;
  //signal to app.component.ts to run corresponding function
  @Output () buyBoost = new EventEmitter();

  constructor(
    private saveDataService: SaveDataService
  ) { 
    this.boost = this.saveDataService.getBoost();
  }

  ngOnInit() {
  }

}