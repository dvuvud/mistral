import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
/**
 * LoginRequest represents the data sent to the backend for login.
 */
interface LoginRequest {
  email: string;
  password: string;
}

/**
 * RegisterRequest represents the data sent to the backend for registration.
 */
interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

/**
 * AuthResponse represents the authentication response from the backend.
 */ 
interface AuthResponse {
  token: string;
  id: number;
  role: 'ADMIN' | 'TEACHER' | 'PARENT';
}

/**
 * RegisterResponse represents the registration response from the backend.
 */
interface RegisterResponse {
  message: string;
}

/**
 * AuthService handles authentication: login, registration, and token validation.
 */
@Injectable({ 
  providedIn: 'root' 
})
export class AuthService {

  private readonly baseUrl = `${environment.apiUrl}/api/auth`;
  private http = inject(HttpClient);
  
  /**
   * Logs in a user with the given email and password.
   *
   * @param email The user's email address.
   * @param password The user's password.
   * @returns An Observable with the authentication response from the backend.
   */
  login(email: string, password: string): Observable<AuthResponse> {
    const data: LoginRequest = {
      email,
      password,
    };

    return this.http
      .post<AuthResponse>(`${this.baseUrl}/login`, data)
      .pipe(tap((response) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('UserId', response.id.toString());
        sessionStorage.setItem('role', response.role);
      }));
  }

  /**
   * Registers a new user with the given name, email, and password.
   *
   * @param name The user's name.
   * @param email The user's email address.
   * @param password The user's password.
   * @returns An Observable with the registration response from the backend.
   */
  register(name: string, email: string, password: string): Observable<RegisterResponse> {
    const data: RegisterRequest = {
      name,
      email,
      password,
    };

    return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, data);
  }

  /**
   * Checks if the user is authorized.
   *
   * @returns A Promise that resolves to true if the user is authorized, otherwise false.
   */
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
