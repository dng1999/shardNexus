import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor (
    private saveDataService: SaveDataService
  ) { }

  ngOnInit() {
  }

  //tell service to call exportSave()
  exportSave() {
    this.saveDataService.exportSave();
  };

  //tell service to call reset()
  reset() {
    this.saveDataService.reset();
  };

}