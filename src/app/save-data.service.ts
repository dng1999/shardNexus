import { Injectable } from '@angular/core';
import { shard, items } from '../cleanSave';

@Injectable({ providedIn: 'root' })
export class SaveDataService {
  error = {status: false, message:''};

  //JSON parse to avoid shallow copying
  shard = JSON.parse(JSON.stringify(shard));
  items = JSON.parse(JSON.stringify(items));
  constructor() { }

  getError() {
    return this.error;
  };

  getShard() {
    return this.shard;
  };

  getItems() {
    return this.items;
  };

  save() {
    window.alert('Saved');
    //window.alert(JSON.stringify(this.items));
    //window.alert(JSON.stringify(this.shard));
  };

  reset() {
    window.alert('Reset');
    //parse imported data again to reset and avoid shallow copying
    this.shard = JSON.parse(JSON.stringify(shard));
    this.items = JSON.parse(JSON.stringify(items));
    this.error.status = false;
  };

  addShard() {
    this.shard.wallet++;
    this.error.status = false;
  };

  addItem(name) {
    var items = this.items;
    var i = 0;
    for (i; i<items.length; i++){
      if (items[i].name == name && items[i].price <= this.shard.walle) {
        this.error.status = false;

        items[i].bought += 1;
        this.shard.wallet -= items[i].price;
        break;
      }
      else {
        this.error.status = true;
        this.error.message = 'You do not have enough shards for ' + name + '.';
      }
    }
  };

}