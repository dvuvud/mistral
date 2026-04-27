import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Group } from '../../routes/admin-page/group/group';

export interface Child {
  id: number;
  name: string;
  date: string | null;
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

  //private url = `${environment.apiUrl}/api/children/attendance`;

  private childUrl = "http://localhost:8080/api/children/attendance";

  private http = inject(HttpClient);

  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.childUrl);
  }
}
