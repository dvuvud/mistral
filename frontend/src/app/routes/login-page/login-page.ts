import { Component, signal, inject } from '@angular/core';
import { LoginContainer } from './login-container/login-container';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'login-page',
  imports: [LoginContainer],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  email = signal('');
  password = signal('');
  name = signal('');
  lastName = signal('');
  errorMessage = signal('');
  successMessage = signal('');

  private router = inject(Router);
  private authService = inject(AuthService);

  onLoginSubmit() {
    console.log(this.email(), this.password());
    this.authService.login(this.email(), this.password()).subscribe({
      error: (err) => {
        this.errorMessage.set(err.error.error);
      },
      next: () => {
        this.router.navigate(['/app']);
      }
    });
  }

  onRegisterSubmit() {
    const name = this.name() + ' ' + this.lastName();
    const email = this.email().trim();
    const password = this.password();

    this.authService.register(name, email, password).subscribe({
      error: (err) => {
        this.successMessage.set('');
        this.errorMessage.set(err.error.error);
      },
      next: (response) => {
        this.errorMessage.set('');
        this.successMessage.set(response.message);
      }
    });
  }
}
