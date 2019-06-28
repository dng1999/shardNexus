import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-euphonium',
  templateUrl: './euphonium.component.html',
  styleUrls: ['./euphonium.component.css']
})
export class EuphoniumComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit() {
  }

  @Output () addItem = new EventEmitter(name);

}