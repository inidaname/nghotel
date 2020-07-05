import { Component, OnInit } from '@angular/core';
import { faBell, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToggleMenuService } from '../../services/toggle-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bell = faBell;
  user = faUser;
  envelop = faEnvelope;
  toggleState: boolean;

  constructor(private toggle: ToggleMenuService) {
    this.toggleState = false;
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggleState = !this.toggleState;
    this.toggle.setToggle(this.toggleState);
  }

}
