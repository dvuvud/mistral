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

  getChildren(): Observable<ChildWithGroupResponse[]> {
    return this.http.get<ChildWithGroupResponse[]>(`${this.adminUrl}/children`);
  }

  getGroups(): Observable<GroupResponse[]> {
    return this.http.get<GroupResponse[]>(`${this.adminUrl}/groups`);
  }

  createChild(name: string): Observable<ChildWithGroupResponse> {
    return this.http.post<ChildWithGroupResponse>(`${this.adminUrl}/child`, { name });
  }

  createGroup(name: string): Observable<GroupResponse> {
    return this.http.post<GroupResponse>(`${this.adminUrl}/group`, { name });
  }

  deleteChild(childId: number): Observable<void> {
    return this.http.delete<void>(`${this.adminUrl}/child/${childId}`);
  }


  //TODO
  assignChildToGroup(groupId: string, childId: string) {

   }

  //TODO
  activateUser() { }
}
