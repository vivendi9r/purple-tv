import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [ Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required]),
    confirmPassword: new FormControl('', Validators.required)
  }, this.passwordsShouldMatch);

  constructor() { }

  ngOnInit(): void {
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

   passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password.value !== confirmPassword.value) {
        return { passwordsShouldMatch: true };
    } else {
        return { passwordsShouldMatch: null };
    }
}

}
