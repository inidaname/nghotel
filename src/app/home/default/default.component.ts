import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  pageTitle: string;

  constructor(private title: Title) {
    this.pageTitle = ' Available Services';
    title.setTitle(this.title.getTitle()+this.pageTitle)
  }

  ngOnInit(): void {
  }

}
