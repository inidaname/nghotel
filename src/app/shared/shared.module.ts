import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SummaryComponent } from './components/summary/summary.component';


@NgModule({
  declarations: [SideBarComponent, HeaderComponent, SummaryComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ChartsModule
  ],
  exports: [SideBarComponent, HeaderComponent, SummaryComponent]
})
export class SharedModule { }
