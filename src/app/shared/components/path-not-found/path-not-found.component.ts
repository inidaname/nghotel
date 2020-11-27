import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss']
})
export class PathNotFoundComponent implements OnInit {

  pageTitle: string;

  constructor(
    private title: Title
  ) {
    this.pageTitle = ' Page Not Found';
    title.setTitle(this.title.getTitle()+this.pageTitle);
  }

  ngOnInit(): void {
  }

}
