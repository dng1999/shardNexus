import { Component } from '@angular/core';
import { shard, items } from '../cleanSave';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Shard Nexus';
  shard = shard.wallet;
  items = items;

  save(){
    window.alert(this.shard);
  };

  addItem(name) {
    var items = this.items;
    var i = 0;
    for (i; i<items.length; i++){
      if (items[i].name == name) { items[i].bought += 1; }
    }
  }
}