import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  manages: any; //this will be from database
  manages$: Observable<any>; //check this
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.manages$ = this.route.params;
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.manages = params['manage'];
    });
  }

}
