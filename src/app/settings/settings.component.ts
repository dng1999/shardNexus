import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';
import { shard, items } from '../../cleanSave';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
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

  save() {
    this.saveDataService.save();
  };

  reset() {
    this.saveDataService.reset();
  };

}