import { Component, OnInit } from '@angular/core';
import { faHome, faCalendarDay, faUsersCog, faCogs, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ToggleMenuService } from '../../services/toggle-menu.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  toggle$: Observable<boolean> = this.toggle.toggler;
  calender = faCalendarDay;
  building = faHome;
  profile = faUsersCog;
  wrench = faCogs;
  money = faMoneyCheck;

  constructor(private toggle: ToggleMenuService) { }

  ngOnInit(): void {
    this.toggle$.subscribe(e=>console.log(e))
  }

}
