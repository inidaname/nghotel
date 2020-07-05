import { Component, OnInit } from '@angular/core';
import { faBell, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageTitle: string;
  bell = faBell;
  user = faUser;
  envelop = faEnvelope;
  toggleState: boolean;

  constructor(
    public toggle: ToggleMenuService,
    private title: Title
  ) {
    this.toggleState = false;
  }

  ngOnInit(): void {
    this.pageTitle = this.title.getTitle().split('|').pop().trim()
  }

  toggleMenu(): void {
    this.toggleState = !this.toggleState;
    this.toggle.setToggle(this.toggleState);
  }

}
