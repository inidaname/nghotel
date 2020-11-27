import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { } from '../../../shared/interface/guestform';

@Component({
  selector: 'app-guest-forms',
  templateUrl: './guest-forms.component.html',
  styleUrls: ['./guest-forms.component.scss']
})
export class GuestFormsComponent implements OnInit {

  formState: string;
  guestDetails: FormGroup;
  destination: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
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
      arrivalDate: [''],
      departDate: [''],
    })
  }

  f () { return this.destination }

  public changeState(state: string, event: Event): string {
    event.preventDefault();
    this.formState = state;
    return state;
  }
}
