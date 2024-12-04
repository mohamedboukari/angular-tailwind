import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  formLogin = new FormGroup({
    email: new FormControl('hama@hama.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
    ]),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{8}$/),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  submit = (e: Event) => {
    e.preventDefault();
    console.log('data', this.formLogin.value);
  };
}
