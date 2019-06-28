import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShardBankComponent } from './shard-bank/shard-bank.component';
import { EuphoniumComponent } from './euphonium/euphonium.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ShardBankComponent, EuphoniumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
