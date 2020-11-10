import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RoomServiceComponent } from './room-service/room-service.component';
import { SalesServiceComponent } from './sales-service/sales-service.component';
import { OtherServiceComponent } from './other-service/other-service.component';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    RoomServiceComponent,
    SalesServiceComponent,
    OtherServiceComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
})
export class HomeModule { }
