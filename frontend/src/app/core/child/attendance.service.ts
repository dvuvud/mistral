import { Injectable, signal, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AttendanceSetInfo {
    id: number;
    childId: number;
    date: string;
    present: boolean;
}

export interface AttendanceGetInfo {
    present: boolean;
}

interface GetAttendanceRequest {
    childId: number;
	date: string;
}

interface SetAttendanceRequest {
	childId: number;
	date: string;
    present: boolean;
}

@Injectable({ providedIn: 'root' })
export class AttendanceService {

  private url = "http://localhost:8080/api/attendance";
  private attendanceSignals = new Map<string, ReturnType<typeof signal<boolean | null>>>();

  private http = inject(HttpClient);


  getSignal(childId: number, dateStr: string) {
    const key = `${childId}_${dateStr}`;
    if (!this.attendanceSignals.has(key)) {
      this.attendanceSignals.set(key, signal<boolean | null>(null));
    }
    return this.attendanceSignals.get(key)!;
  }


  getAttendance(childId: number): Observable<AttendanceGetInfo>  {
    const params = new HttpParams().set('childId', childId);
    return this.http.get<AttendanceGetInfo>("http://localhost:8080/api/attendance", {params});
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
