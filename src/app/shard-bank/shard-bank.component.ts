import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../save-data.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shard-bank',
  templateUrl: './shard-bank.component.html',
  styleUrls: ['./shard-bank.component.css']
})
export class ShardBankComponent implements OnInit {
  shard;
  //signal to app.component.ts to run corresponding function
  @Output() produceShard = new EventEmitter();
  constructor(
    private saveDataService: SaveDataService
  ) { 
    this.shard = this.saveDataService.getShard();
  }

  ngOnInit() { }

}