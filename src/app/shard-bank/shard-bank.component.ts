import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-shard-bank',
  templateUrl: './shard-bank.component.html',
  styleUrls: ['./shard-bank.component.css']
})
export class ShardBankComponent implements OnInit {
  @Input() shard;
  constructor() { }

  ngOnInit() { }

  addShard() {
    this.shard += 1;
  }

}