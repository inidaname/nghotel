import { Component, OnInit } from '@angular/core';
import { faHome, faCalendarDay, faUsersCog, faCogs, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  calender = faCalendarDay;
  building = faHome;
  profile = faUsersCog;
  wrench = faCogs;
  money = faMoneyCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
