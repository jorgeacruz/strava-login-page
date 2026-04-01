import { Component } from '@angular/core';
import { DefautLoginLayout } from '../../components/defaut-login-layout/defaut-login-layout';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { PrimaryInput } from "../../components/primary-input/primary-input";

@Component({
  selector: 'app-login',
  imports: [
    DefautLoginLayout,
    ReactiveFormsModule,
    PrimaryInput
],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
}
