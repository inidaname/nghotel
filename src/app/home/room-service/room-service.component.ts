import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './room-service.component.html',
  styleUrls: ['./room-service.component.scss']
})
export class RoomServiceComponent implements OnInit {

  pageTitle: string;

  constructor(
    private title: Title,
    ) {
    this.pageTitle = ' Room Services';
    title.setTitle(this.title.getTitle()+this.pageTitle);
  }

  ngOnInit(): void {
  }
}
