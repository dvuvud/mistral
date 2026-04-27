import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AttendanceStatus } from './attendance.service';

export interface Child {
  id: number;
  name: string;
  date: string | null;
  status: AttendanceStatus | null;
  present: boolean | null;
  group?: {
    id: number;
    name: string;
  } | null;
}

export interface GroupResponse {
  id: number;
  name: string;
}

export interface ChildResponse {
  id: number;
  name: string;
}

export interface ChildWithGroupResponse {
  id: number;
  name: string;
  group: GroupResponse | null;
}

export interface UserResponse {
  id: number;
  name: string;
  role: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class ChildService {

  private url = `${environment.apiUrl}/api/children/attendance`;
  private urlPerGroup = `${environment.apiUrl}/api/children/attendance/group`;

  private childUrl = "http://localhost:8080/api/children/attendance";


  private http = inject(HttpClient);

  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.childUrl);
  }

  getChildrenByGroup(groupId: number, date?: string): Observable<Child[]> {
    let params = new HttpParams().set('groupId', groupId);
    if (date) {
      params = params.set('date', date);
    }
    return this.http.get<Child[]>(this.urlPerGroup, { params });
  }

}