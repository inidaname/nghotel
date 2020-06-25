import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SideBarComponent, HeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [SideBarComponent, HeaderComponent]
})
export class SharedModule { }
