import { Component, OnInit } from '@angular/core';
import { faBell, faUser, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { Title } from '@angular/platform-browser';
import { Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  home = faHome;
  toggleState: boolean;
  menuTog: boolean;

  constructor(
    public toggle: ToggleMenuService,
    private title: Title,
    public router: Router
  ) {
    this.menuTog = false;
    this.toggleState = false;
    router.events.pipe(
      filter((e: RouterEvent) => e instanceof RouterEvent)
   ).subscribe((e: RouterEvent) => {
     if (e.url.startsWith('/home')) {
       this.menuTog = true;
     }
   });
  }

  ngOnInit(): void {
    this.pageTitle = this.title.getTitle().split('|').pop().trim();
  }

  toggleMenu(): void {
    this.toggleState = !this.toggleState;
    this.toggle.setToggle(this.toggleState);
  }

}
