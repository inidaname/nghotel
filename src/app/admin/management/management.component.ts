import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  manages: any; //this will be from database
  manages$: Observable<any>; //check this
  sub: any;
  pageTitle: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {
    this.manages$ = this.route.params;
    this.pageTitle = ' Management';
    title.setTitle(this.title.getTitle()+this.pageTitle)
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.manages = params['manage'];
    });
  }

}
