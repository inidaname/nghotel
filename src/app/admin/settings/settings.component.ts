import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  pageTitle: string;

  constructor(private title: Title) {
    this.pageTitle = ' Setting';
    title.setTitle(this.title.getTitle()+this.pageTitle)
  }

  ngOnInit(): void {
  }

}
