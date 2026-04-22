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
}

@Injectable({ providedIn: 'root' })
export class ChildService {

  private url = `${environment.apiUrl}/api/children/attendance`;
  private urlPerGroup = `${environment.apiUrl}/api/children/attendance/group`;

  private childUrl = "http://localhost:8080/api/children/attendance";

  private childUrl = "http://localhost:8080/api/children";
  private adminUrl = "http://localhost:8080/api/admin";

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

  getAll(): Observable<Child[]> {
    return this.http.get<Child[]>(this.childUrl);
  }

  createChild(name: string): Observable<any> {
    return this.http.post(`${this.adminUrl}/child`, { name });
  }

  createGroup(name: string): Observable<any> {
    return this.http.post(`${this.adminUrl}/group`, { name });
  }


  //TODO
  assignChildToGroup(groupId: string, childId: string) { }

  //TODO
  activateUser() { }

}
