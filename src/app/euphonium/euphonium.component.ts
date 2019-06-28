import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-euphonium',
  templateUrl: './euphonium.component.html',
  styleUrls: ['./euphonium.component.css']
})
export class EuphoniumComponent implements OnInit {
  //get item variable from app.component.ts via bound property item
  @Input() items;
  //signal to app.component.ts to run corresponding function
  @Output () buyItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}