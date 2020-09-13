import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { ManagementComponent } from './management/management.component';
import { StaffComponent } from './staff/staff.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [HomeComponent, SettingsComponent, ManagementComponent, StaffComponent, ReportComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
