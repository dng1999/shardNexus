import { Component } from '@angular/core';
import { shard, items } from '../cleanSave';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Shard';
  error = {status: false, message:''};

  //JSON parse to avoid shallow copying
  shard = JSON.parse(JSON.stringify(shard));
  items = JSON.parse(JSON.stringify(items));

  save() {
    window.alert('Saved');
    //making sure values taken from cleanSave aren't modifies
    //window.alert(JSON.stringify(items));
    //window.alert(JSON.stringify(shard));
  };

  reset() {
    window.alert('Reset');
    //parse imported data again to reset and avoid shallow copying
    this.shard = JSON.parse(JSON.stringify(shard));
    this.items = JSON.parse(JSON.stringify(items));
    this.error.status = false;
  }

  addShard() {
    this.shard++;
    this.error.status = false;
  }

  addItem(name) {
    var items = this.items;
    var i = 0;
    for (i; i<items.length; i++){
      if (items[i].name == name && items[i].price <= this.shard) {
        this.error.status = false;

        items[i].bought += 1;
        this.shard -= items[i].price;
        break;
      }
      else {
        this.error.status = true;
        this.error.message = 'You do not have enough shards for ' + name + '.';
      }
    }
  }
}