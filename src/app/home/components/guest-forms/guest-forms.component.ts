import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestDetails } from '../../../shared/interface/guest-details';

@Component({
  selector: 'app-guest-forms',
  templateUrl: './guest-forms.component.html',
  styleUrls: ['./guest-forms.component.scss']
})
export class GuestFormsComponent implements OnInit {

  formState: string;
  guestDetails: FormGroup;
  destination: FormGroup;
  contactDetail: FormGroup;
  guestIdentity: FormGroup;
  stateOfOrigin: FormGroup;
  guestFormDetail: GuestDetails;

  constructor(
    private fb: FormBuilder
  ) {
    this.guestFormDetail = Object();
    this.formState = 'guestIdentity';
  }

  ngOnInit(): void {
    this.guestDetails = this.fb.group({
      guestName: ['', Validators.required],
      guestAddress: ['', Validators.required],
      guestGender: [''],
      guestBirthday: [''],
      nationality: ['', Validators.required],
      guestOccupation: [''],
    });

    this.destination = this.fb.group({
      arrivingFrom: [''],
      destination: [''],
      arrivalDate: [''],
      departDate: [''],
      reasonOfVisit: ['']
    });

    this.contactDetail = this.fb.group({
      guestPhoneNumber: [''],
      guestEmail: [''],
      nextOfKinName: [''],
      nextOfKinEmail: [''],
      nextOfKinNumber: [''],
    });

    this.guestIdentity = this.fb.group({
      placeOfWork: [''],
      idCard: [''],
      idNumber: [''],
      issueDate: [''],
      expairyDate: [''],
    });

    this.stateOfOrigin = this.fb.group({
      stateOrigin: [''],
      localGovt: [''],
    });
  }

  f () { return this.destination }

  public changeState(state: string, event: Event, form?: FormGroup): string {

    if (form){
      for (const key in form.value) {
        if (Object.prototype.hasOwnProperty.call(form.value, key)) {
          const element = form.value[key];
          this.guestFormDetail[key] = element;
          console.log(this.guestFormDetail)
        }
      }
    }
    event.preventDefault();
    this.formState = state;
    return state;
  }
}
