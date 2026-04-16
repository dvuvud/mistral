import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export type AttendanceSetInfo = {
    id: number;
    childId: number;
    date: string;
    present: boolean;
};

export type AttendanceGetInfo = {
    present: boolean;
};

type GetAttendanceRequest = {
    childId: number;
	date: string;
};

type SetAttendanceRequest = {
	childId: number;
	date: string;
    present: boolean;
};

@Injectable({ providedIn: 'root' })
export class AttendanceService {

  private url = "http://localhost:8080/api/attendance";

  constructor(private http: HttpClient) {}

  getAttendance(childId: number, date: string): Observable<AttendanceGetInfo>  {
    const data: GetAttendanceRequest = {
        childId,
        date,
    };

    return this.http.post<AttendanceGetInfo>("http://localhost:8080/api/attendance/fetch", data)
  } 

  setAttendance(childId: number, date: string, present: boolean): Observable<AttendanceSetInfo> {
    const data: SetAttendanceRequest = {
        childId,
        date,
        present,
    };

    return this.http.post<AttendanceSetInfo>(this.url, data);
  }
}