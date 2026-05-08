
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface User {
  name: string,
  room: string,
  userId: number,
  id?: number,
  color: string,
  role?: string,
  email?: string,
}

@Injectable({ providedIn: 'root' })

export class userService {
  private url = `${environment.apiUrl}/api/user/teacher`;
  private colorUrl = `${environment.apiUrl}/api/user/color`
  private http = inject(HttpClient);

  getUser(teacherId: number): Observable<User> {
    const params = new HttpParams().set('teacherId', teacherId);
    return this.http.get<User>(this.url, {params});
  }

  updateColor(color: string) {
    return this.http.patch(this.colorUrl, { color: color });
  }
}
