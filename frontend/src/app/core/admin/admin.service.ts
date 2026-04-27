import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface GroupResponse {
  id: number;
  name: string;
}

export interface ChildResponse {
  id: number;
  name: string;
}

export interface ChildWithGroupResponse {
    id : number;
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
export class AdminService {

  private adminUrl = `${environment.apiUrl}/api/admin`;
  private http = inject(HttpClient);

  createChild(name: string): Observable<any> {
    return this.http.post(`${this.adminUrl}/child`, { name });
  }

  createGroup(name: string): Observable<any> {
    return this.http.post(`${this.adminUrl}/group`, { name });
  }


  //TODO
  assignChildToGroup(groupId: string, childId: string) {

   }

  //TODO
  activateUser() { }
}

