import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  manages: any; // this will be from database
  manages$: Observable<any>; // check this
  sub: any;
  pageTitle: string;

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.pageTitle = ' Staff Management';
    this.manages$ = this.route.params;
    title.setTitle(this.title.getTitle()+this.pageTitle)
  }

  ngOnInit(): void {
  }

}
