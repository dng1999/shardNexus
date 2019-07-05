import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-euphonium',
  templateUrl: './euphonium.component.html',
  styleUrls: ['./euphonium.component.css']
})
export class EuphoniumComponent implements OnInit {
  items;
  //signal to app.component.ts to run corresponding function
  @Output () buyItem = new EventEmitter();

  constructor(
    private saveDataService: SaveDataService
  ) { 
    this.items = this.saveDataService.getItems();
  }

  ngOnInit() {
  }

}