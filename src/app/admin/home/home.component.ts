import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageTitle: string;

  constructor(private title: Title) {
    this.pageTitle = ' Home';
    title.setTitle(this.title.getTitle()+this.pageTitle)
  }

  ngOnInit(): void {}

}
