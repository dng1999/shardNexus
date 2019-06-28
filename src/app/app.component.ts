import { Component } from '@angular/core';
import { shard, items } from 'cleanSave.ts';

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
    window.alert('Hy');
  };
}
