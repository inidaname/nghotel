import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathNotFoundComponent } from '../shared/components/path-not-found/path-not-found.component';
import { DefaultComponent } from './default/default.component';
import { OtherServiceComponent } from './other-service/other-service.component';
import { RoomServiceComponent } from './room-service/room-service.component';
import { SalesServiceComponent } from './sales-service/sales-service.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'default'
  },
  {
    path: 'default',
    component: DefaultComponent
  },
  {
    path: 'roomservice',
    component: RoomServiceComponent
  },
  {
    path: 'saleservice',
    component: SalesServiceComponent
  },
  {
    path: 'otherservice',
    component: OtherServiceComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
