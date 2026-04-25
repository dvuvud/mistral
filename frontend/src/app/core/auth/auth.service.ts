import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

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
  id: number;
}

interface RegisterResponse {
  message: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/api/auth`;

  private http = inject(HttpClient);

  login(email: string, password: string): Observable<AuthResponse> {
    const data: LoginRequest = {
      email,
      password,
    };

    return this.http
      .post<AuthResponse>(`${this.baseUrl}/login`, data)
<<<<<<< Updated upstream
      .pipe(tap((response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('UserId', response.id.toString());
      }));
  }

  register(name: string, email: string, password: string): Observable<RegisterResponse> {
=======
      .pipe(tap((response) => localStorage.setItem('token', response.token)));
  }

  register(name: string, email: string, password: string): Observable<AuthResponse> {
>>>>>>> Stashed changes
    const data: RegisterRequest = {
      name,
      email,
      password,
    };

<<<<<<< Updated upstream
    return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, data);
=======
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/register`, data)
      .pipe(tap((response) => localStorage.setItem('token', response.token)));
>>>>>>> Stashed changes
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
