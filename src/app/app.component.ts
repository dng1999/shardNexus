import { Component } from '@angular/core';
import { shard, items } from '../cleanSave';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Shard Nexus';

  //JSON parse to avoid shallow copying
  shard = JSON.parse(JSON.stringify(shard));
  items = JSON.parse(JSON.stringify(items));

  save() {
    //making sure values taken from cleanSave aren't modifies
    window.alert(JSON.stringify(items));
    window.alert(JSON.stringify(shard));
  };

  reset() {
    //parse imported data again to reset and avoid shallow copying
    this.shard = JSON.parse(JSON.stringify(shard));
    this.items = JSON.parse(JSON.stringify(items));
  }

  addShard() {
    this.shard++;
  }

  addItem(name) {
    var items = this.items;
    var i = 0;
    for (i; i<items.length; i++){
      if (items[i].name == name) { items[i].bought += 1; }
    }
  }
}