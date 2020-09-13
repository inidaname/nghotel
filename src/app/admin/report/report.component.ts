import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  manages: any; //this will be from database
  manages$: Observable<any>; //check this
  sub: any;
  pageTitle: string;

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.pageTitle = ' Reports';
    this.manages$ = this.route.params;
    title.setTitle(this.title.getTitle()+this.pageTitle)
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.manages = params['report'];
    });
  }

}
