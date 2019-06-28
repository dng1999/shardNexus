import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Shard';
  error;

  constructor(
    private saveDataService: SaveDataService
  ) { 
    this.error = this.saveDataService.getError();
  }

  ngOnInit() {
  }

}