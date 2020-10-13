import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.scss']
})
export class StaffProfileComponent implements OnInit {
  manages: any; //this will be from database
  manages$: Observable<any>; //check this
  sub: any;
  pageTitle: string;
  profileName: string;

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.profileName = 'Hassan'
    this.pageTitle = ` Staff Profile: ${this.profileName}`;
    this.manages$ = this.route.params;
    title.setTitle(this.title.getTitle()+this.pageTitle);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.manages = params['profile'];
    });
  }

}
