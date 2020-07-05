import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from '../shared/services/toggle-menu.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public toggle: ToggleMenuService) { }

  ngOnInit(): void {
  }

}
