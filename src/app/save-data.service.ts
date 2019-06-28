import { Injectable } from '@angular/core';
import { save } from '../cleanSave';

@Injectable({ providedIn: 'root' })

//save data made a service since we want it to be shared across the app
export class SaveDataService {
  error = {status: false, message:''};

  //JSON parse to avoid shallow copying
  shard = JSON.parse(JSON.stringify(save.shard));
  items = JSON.parse(JSON.stringify(save.items));
  constructor() { }

  //get methods since you can't directly access members of service
  getError() {
    return this.error;
  };

  getShard() {
    return this.shard;
  };

  getItems() {
    return this.items;
  };

  exportSave() {
    //condense current save into JSON string
    //can hash save later to prevent save editing
    window.alert((JSON.stringify({shard: this.shard, items: this.items})));
  };

  importSave() {
    
  }

  reset() {
    window.alert('Reset');
    //parse imported data again to reset and avoid shallow copying
    this.shard = JSON.parse(JSON.stringify(save.shard));
    this.items = JSON.parse(JSON.stringify(save.items));
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
      if (items[i].name == name && items[i].price <= this.shard.wallet) {
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