import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [HomeComponent, SettingsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
