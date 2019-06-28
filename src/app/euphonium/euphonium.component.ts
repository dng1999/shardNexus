import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

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

  addItem(name) {
    var items = this.items;
    var i = 0;
    for (i; i<items.length; i++){
      if (items[i].name == name) { items[i].bought += 1; }
    }
  }

}