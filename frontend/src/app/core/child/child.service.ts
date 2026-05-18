import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AttendanceStatus } from './attendance.service';

/**
 * Child represents a child with their attendance information for a specific date.
 * It includes the child's ID, name, date of attendance, and attendance status.
 */
export interface Child {
  id: number;
  name: string;
  date: string | null;
  status: AttendanceStatus | null;
}

@Injectable({ providedIn: 'root' })
export class ChildService {

  private url = `${environment.apiUrl}/api/children/attendance`;
  private urlPerGroup = `${environment.apiUrl}/api/children/attendance/group`;

  private http = inject(HttpClient);

  /**
   * Gets the list of children with their attendance information for a specific date.
   * @returns An Observable with the list of children and their attendance information.
   */
  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.url);
  }

  /**
   * Gets the list of children with their attendance information for a specific group and date.
   * @param groupId The ID of the group.
   * @param date The date.
   * @returns An Observable with the list of children and their attendance information.
   */
  getChildrenByGroup(groupId: number, date?: string): Observable<Child[]> {
    let params = new HttpParams().set('groupId', groupId);
    if (date) {
      params = params.set('date', date);
    }
    return this.http.get<Child[]>(this.urlPerGroup, { params });
  }
}
