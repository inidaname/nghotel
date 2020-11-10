import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from '../shared/services/toggle-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public toggle: ToggleMenuService) { }

  ngOnInit(): void {
  }

}
