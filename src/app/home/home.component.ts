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

  //tell service to call reset()
  addShard() {
    this.saveDataService.addShard();
  };

  //tell service to call reset()
  addItem(name) {
    this.saveDataService.addItem(name);
  };
}