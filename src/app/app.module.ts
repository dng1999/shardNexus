import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShardBankComponent } from './shard-bank/shard-bank.component';
import { EuphoniumComponent } from './euphonium/euphonium.component';
import { SettingsComponent } from './settings/settings.component';
import { SaveDataService } from './save-data.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'settings', component: SettingsComponent },
    ])
  ],
  declarations: [ AppComponent, ShardBankComponent, EuphoniumComponent, SettingsComponent, HomeComponent, NavbarComponent],
  bootstrap:    [ AppComponent ],
  providers: [SaveDataService]
})
export class AppModule { }
