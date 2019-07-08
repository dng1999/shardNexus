import { Injectable } from '@angular/core';
import { save } from '../cleanSave';

@Injectable({ providedIn: 'root' })

//save data made a service since we want it to be shared across the app
export class SaveDataService {
  error = {status: false, message:''};

  //JSON parse to avoid shallow copying
  shard = JSON.parse(JSON.stringify(save.shard));
  items = JSON.parse(JSON.stringify(save.items));
  boost = JSON.parse(JSON.stringify(save.boost));
  
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

  getBoost() {
    return this.boost;
  }

  exportSave() {
    //condense current save into JSON string
    //can hash save later to prevent save editing
    var save = JSON.stringify({shard: this.shard, items: this.items, boost: this.boost});
    this.error.status = true;
    this.error.message = save;
  };

  importSave(saveData) {
    try {
      this.shard = JSON.parse(JSON.stringify(saveData.shard));
      this.items = JSON.parse(JSON.stringify(saveData.items));
      this.boost = JSON.parse(JSON.stringify(saveData.boost));
      this.error.status = false;
    }
    catch (saveError) {
      this.error.status = true;
      this.error.message = 'Invalid save data.';
    }
  }

  reset() {
    window.alert('Reset');
    //parse imported data again to reset and avoid shallow copying
    this.shard = JSON.parse(JSON.stringify(save.shard));
    this.items = JSON.parse(JSON.stringify(save.items));
    this.boost = JSON.parse(JSON.stringify(save.boost));
    this.error.status = false;
  };

  calculateItemBonus(){
    var bonus = 0;
    var items = this.items;
    var i = 0;
    for (i; i<items.length; i++){
      bonus += items[i].bought*items[i].bonus*items[i].multiplier;
    }
    this.shard.totalBonus = bonus + 1;
  }

  addShard() {
    this.shard.wallet += this.shard.totalBonus;
    this.shard.lifetime += this.shard.totalBonus;
    this.error.status = false;
  };

  increaseItemPrice(index){
    var items = this.items;
    items[index].price += save.items[index].price;
  };

  addItem(name) {
    var items = this.items;
    var i = 0;
    for (i; i<items.length; i++){
      if (items[i].name == name && items[i].price <= this.shard.wallet) {
        this.error.status = false;

        items[i].bought += 1;
        this.shard.wallet -= items[i].price;
        this.increaseItemPrice(i);

        this.calculateItemBonus()
        break;
      }
      else {
        this.error.status = true;
        this.error.message = 'You do not have enough shards for ' + name + '.';
      }
    }
  };

  addBoost(name) {
    var items = this.items;
    var boost = this.boost;
    var i = 0;
    for (i; i<boost.length;i++){
      if (boost[i].name == name && boost[i].price <= this.shard.wallet) {
        this.error.status = false;

        boost[i].owned = true;
        this.shard.wallet -= boost[i].price;
        items[boost[i].item].multiplier += boost[i].multiplier;

        break;
      }
      else {
        this.error.status = true;
        this.error.message = 'You do not have enough for ' + name + '.';
      }
    }
  }

}