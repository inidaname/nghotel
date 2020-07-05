import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ToggleMenuService {

  private toggled: BehaviorSubject<boolean>;
  public toggler: Observable<boolean>;

  constructor() {
    this.toggled = new BehaviorSubject(false);
    this.toggler = this.toggled.asObservable();
  }

  public setToggle(toggle: boolean): void {
    console.log(toggle)
    this.toggled.next(toggle);
  }
}
