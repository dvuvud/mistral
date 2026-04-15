import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

type LoginRequest = {
	email: string;
	password: string;
};

type RegisterRequest = {
    name: string;
	email: string;
	password: string;
};

type AuthResponse = {
	token: string;
	email: string;
	name: string;
	role: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
	private readonly baseUrl = 'http://localhost:8080/api/auth';

	constructor(private http: HttpClient) {}

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
}
