import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shard-bank',
  templateUrl: './shard-bank.component.html',
  styleUrls: ['./shard-bank.component.css']
})
export class ShardBankComponent implements OnInit {
  //get shard variable from app.component.ts via bound property shard
  @Input() shard;
  //signal to app.component.ts to run corresponding function
  @Output() produceShard = new EventEmitter();
  constructor() { }

  ngOnInit() { }

}