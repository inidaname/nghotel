import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './room-service.component.html',
  styleUrls: ['./room-service.component.scss']
})
export class RoomServiceComponent implements OnInit {

  pageTitle: string;
  formState: string;
  guestDetails: FormGroup;
  destination: FormGroup;

  constructor(
    private title: Title,
    private fb: FormBuilder
    ) {
    this.pageTitle = ' Room Services';
    title.setTitle(this.title.getTitle()+this.pageTitle);
    this.formState = 'userDestination';
  }

  ngOnInit(): void {
    this.guestDetails = this.fb.group({
      guestName: ['', Validators.required],
      guestAddress: ['', Validators.required],
      guestGender: [''],
      guestBirthday: [''],
      guestOccupation: [''],
    });

    this.destination = this.fb.group({
      arrivingFrom: [''],
      destination: [''],
      nationality: [''],
    })
  }

  public changeState(state: string, event: Event): string {
    console.log('See ')
    event.preventDefault();
    this.formState = state;
    return state;
  }

}
