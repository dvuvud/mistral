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

export interface GroupData {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class ChildService {

  private url = `${environment.apiUrl}/api/children/attendance`;

  private childUrl = "http://localhost:8080/api/children";
  private adminUrl = "http://localhost:8080/api/admin";

  private http = inject(HttpClient);

  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.url);
  }

  getAll(): Observable<Child[]> {
    return this.http.get<Child[]>(`${this.adminUrl}/children`);
  }

  createChild(name: string): Observable<Child> {
    return this.http.post<Child>(`${this.adminUrl}/child`, { name });
  }

  createGroup(name: string): Observable<any> {
    return this.http.post(`${this.adminUrl}/group`, { name });
  }

  deleteChild(id: number): Observable<any> {
    return this.http.delete(`${this.adminUrl}/child/${id}`);
  }

  getGroups(): Observable<GroupData[]> {
    return this.http.get<GroupData[]>(`${this.adminUrl}/groups`);
  }


  //TODO
  assignChildToGroup(groupId: string, childId: number): Observable<any> {
    return this.http.put(`${this.adminUrl}/group/${groupId}/child/${childId}`, {});
  }

  //TODO
  activateUser() { }

}
