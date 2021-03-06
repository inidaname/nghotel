import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SummaryComponent } from './components/summary/summary.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { ToggleMenuService } from './services/toggle-menu.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    SummaryComponent,
    PathNotFoundComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ChartsModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    SummaryComponent,
    PathNotFoundComponent
  ],
  providers: [
    ToggleMenuService
  ]
})
export class SharedModule { }
