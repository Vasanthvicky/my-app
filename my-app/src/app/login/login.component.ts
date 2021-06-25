import { Component, forwardRef, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

const MULTI_SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LoginCustomizeFieldsMatcher),
  multi: true
};

/** Error when invalid control is dirty, touched, or submitted. */
export class LoginCustomizeFieldsMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  matcher = new LoginCustomizeFieldsMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
