import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Child {
  id: number;
  name: string;
  date: string | null;
  present: boolean | null;
}

@Injectable({ providedIn: 'root' })
export class ChildService {

  private url = `${environment.apiUrl}/api/children/attendance`;
  private urlPerGroup = `${environment.apiUrl}/api/children/attendance/group`;

  private http = inject(HttpClient);

  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.url);
  }

  getChildrenByGroup(groupId: number, date?: string): Observable<Child[]> {
    let params = new HttpParams().set('groupId', groupId);
    if (date) {
      params = params.set('date', date);
    }
  return this.http.get<Child[]>(this.urlPerGroup, { params });
}
}
