import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShardBankComponent } from './shard-bank/shard-bank.component';
import { EuphoniumComponent } from './euphonium/euphonium.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'settings', component: SettingsComponent },
    ])
  ],
  declarations: [ AppComponent, ShardBankComponent, EuphoniumComponent, SettingsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
