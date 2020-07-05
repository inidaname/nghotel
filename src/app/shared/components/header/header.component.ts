import { Component, OnInit } from '@angular/core';
import { faBell, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bell = faBell;
  user = faUser;
  envelop = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
