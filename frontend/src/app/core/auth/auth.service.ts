import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface LoginRequest {
	email: string;
	password: string;
}

interface RegisterRequest {
    name: string;
	email: string;
	password: string;
}

interface AuthResponse {
	token: string;
	email: string;
	name: string;
	role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = 'http://localhost:8080/api/auth';

  private http = inject(HttpClient);

  login(email: string, password: string): Observable<AuthResponse> {
    const data: LoginRequest = {
      email,
      password,
    };

    return this.http
      .post<AuthResponse>(`${this.baseUrl}/login`, data)
      .pipe(tap((response) => localStorage.setItem('token', response.token)));
  }

  register(name: string, email: string, password: string): Observable<AuthResponse> {
    const data: RegisterRequest = {
      name,
      email,
      password,
    };

    return this.http
      .post<AuthResponse>(`${this.baseUrl}/register`, data)
      .pipe(tap((response) => localStorage.setItem('token', response.token)));
  }

  async isAuthorized() {
    const x = new Promise<boolean>((resolve) => {
      this.http.get<boolean>(`${this.baseUrl}/validate`, {}).subscribe({
        error: () => resolve(false),
        complete: () => resolve(true)
      });
    })
    const t = await x;
    //console.log(t);
    return t;
  }
}
