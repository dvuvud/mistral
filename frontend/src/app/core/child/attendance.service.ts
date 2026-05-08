import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type AttendanceStatus = 'NOT_SET' | 'CHECKED_IN' | 'CHECKED_OUT' | 'LEAVE' | 'ABSENT';

export interface AttendanceInfo {
  status: AttendanceStatus;
  checkInTime: string | null;
  checkOutTime: string | null;
}

interface SetAttendanceRequest {
  childId: number;
  date: string;
  status: AttendanceStatus;
}

@Injectable({ providedIn: 'root' })
export class AttendanceService {

  private url = `${environment.apiUrl}/api/attendance`;
  private attendanceSignals = new Map<string, ReturnType<typeof signal<AttendanceStatus | null>>>();

  private http = inject(HttpClient);


  getSignal(childId: number, dateStr: string) {
    const key = `${childId}_${dateStr}`;
    if (!this.attendanceSignals.has(key)) {
      this.attendanceSignals.set(key, signal<AttendanceStatus | null>(null));
    }
    return this.attendanceSignals.get(key)!;
  }

  setAttendance(childId: number, date: string, status: AttendanceStatus): Observable<AttendanceInfo> {
    const data: SetAttendanceRequest = {
      childId,
      date,
      status,
    };

    return this.http.put<AttendanceInfo>(this.url, data);
  }
}
