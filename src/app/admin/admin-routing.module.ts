import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { SettingsComponent } from './settings/settings.component';
import { StaffComponent } from './staff/staff.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { ReportComponent } from './report/report.component';
import { PathNotFoundComponent } from '../shared/components/path-not-found/path-not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'management/:manage', component: ManagementComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'staff/:profile', component: StaffProfileComponent },
  { path: 'report', component: ReportComponent },
  { path: 'report/:report', component: ReportComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
