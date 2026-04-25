import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AttendanceSetInfo {
  id: number;
  childId: number;
  date: string;
  present: boolean;
}

export interface AttendanceGetInfo {
  present: boolean;
}

interface SetAttendanceRequest {
  childId: number;
  date: string;
  present: boolean;
}

@Injectable({ providedIn: 'root' })
export class AttendanceService {

  private url = `${environment.apiUrl}/api/attendance`;
  private attendanceSignals = new Map<string, ReturnType<typeof signal<boolean | null>>>();

  private http = inject(HttpClient);


  getSignal(childId: number, dateStr: string) {
    const key = `${childId}_${dateStr}`;
    if (!this.attendanceSignals.has(key)) {
      this.attendanceSignals.set(key, signal<boolean | null>(null));
    }
    return this.attendanceSignals.get(key)!;
  }

  setAttendance(childId: number, date: string, present: boolean): Observable<AttendanceSetInfo> {
    const data: SetAttendanceRequest = {
      childId,
      date,
      present,
    };

    return this.http.put<AttendanceSetInfo>(this.url, data);
  }

}
