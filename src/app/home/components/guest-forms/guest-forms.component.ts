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
  uploadForm: FormGroup;
  guestFormDetail: GuestDetails;

  constructor(
    private fb: FormBuilder
  ) {
    this.guestFormDetail = Object();
    this.formState = null;
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
      arrivingFrom: ['', Validators.required],
      destination: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      departDate: ['', Validators.required],
      reasonOfVisit: ['']
    });

    this.contactDetail = this.fb.group({
      guestPhoneNumber: ['', Validators.required],
      guestEmail: ['', Validators.required],
      nextOfKinName: [''],
      nextOfKinEmail: [''],
      nextOfKinNumber: [''],
    });

    this.guestIdentity = this.fb.group({
      placeOfWork: ['', Validators.required],
      idCard: ['', Validators.required],
      idNumber: ['', Validators.required],
      issueDate: ['', Validators.required],
      expairyDate: ['', Validators.required],
    });

    this.stateOfOrigin = this.fb.group({
      stateOrigin: [''],
      localGovt: [''],
    });

    this.uploadForm = this.fb.group({
      idCardFront: [''],
      idCardBack: ['']
    });
  }

  f = (form: FormGroup) => form.controls ;

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
