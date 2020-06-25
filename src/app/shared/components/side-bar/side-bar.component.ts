import { Component, OnInit } from '@angular/core';
import { faHome, faCalendarDay, faPortrait, faWrench, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  calender = faCalendarDay;
  building = faHome;
  profile = faPortrait;
  wrench = faWrench;
  money = faMoneyBill;

  constructor() { }

  ngOnInit(): void {
  }

}
