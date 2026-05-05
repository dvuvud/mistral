
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface user {
  id: number;
  name: string;
  role: string;
  email: string;
}

@Injectable( {providedIn: 'root'} )

export class userService {
  private url = `${environment.apiUrl}/api/user/teacher`;
  private http = inject(HttpClient);

  getUser(teacherId: number): Observable<user> {
    const params = new HttpParams().set('teacherId', teacherId);
    return this.http.get<user>(this.url, {params});
  }
}