import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShardBankComponent } from './shard-bank/shard-bank.component';
import { EuphoniumComponent } from './euphonium/euphonium.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SaveDataService } from './save-data.service';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'settings', component: SettingsComponent },
    ])
  ],
  declarations: [ AppComponent, ShardBankComponent, EuphoniumComponent, SettingsComponent, HomeComponent, NavbarComponent, StatisticsComponent],
  bootstrap:    [ AppComponent ],
  providers: [SaveDataService]
})
export class AppModule { }
