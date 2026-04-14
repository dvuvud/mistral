import { Component, Signal, signal } from '@angular/core';
import { LoginContainer } from './login-container/login-container';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-login-page',
  imports: [LoginContainer],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  email = signal('');
  password = signal('');

  onLoginSubmit() {
    console.log(this.email(), this.password());
  }
}
