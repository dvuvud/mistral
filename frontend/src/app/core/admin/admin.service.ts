import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GroupResponse, ChildResponse, ChildWithGroupResponse } from '../interface/interface';


@Injectable({ providedIn: 'root' })
export class AdminService {


  private adminUrl = `${environment.apiUrl}/api/admin`
  private http = inject(HttpClient);

  createChild(name: string): Observable<ChildResponse> {
    return this.http.post<ChildResponse>(`${this.adminUrl}/child`, { name });
  }

  createGroup(name: string): Observable<GroupResponse> {
    return this.http.post<GroupResponse>(`${this.adminUrl}/group`, { name });
  }

  getAllChildren(): Observable<ChildWithGroupResponse[]> {
    return this.http.get<ChildWithGroupResponse[]>(`${this.adminUrl}/children`);
  }


  getAllGroups(): Observable<GroupResponse[]> {
    return this.http.get<GroupResponse[]>(`${this.adminUrl}/groups`);
  }


  assignChildToGroup(groupId: number, childId: number): Observable<GroupResponse> {
    return this.http.put<ChildResponse>(`${this.adminUrl}/group/${groupId}/child/${childId}`, {});
  }


  deleteChild(id: number): Observable<void> {
    return this.http.delete<void>(`${this.adminUrl}/child/${id}`);
  }


}
