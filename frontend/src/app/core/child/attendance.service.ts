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
    list: {
        childId: number,
        name: string,
        present: boolean
    }[];
    count: number;
};

type GetAttendanceRequest = {
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

  getAttendance(date: string): Observable<AttendanceGetInfo>  {
    const data: GetAttendanceRequest = {
        date,
    };

    return this.http.get<{
        list: { childId: number; name: string; present: boolean }[];
        count: number;
    }>(this.url, { params: data }).pipe(
        map((response) => ({
            list: response.list,
            count: response.count,
        }))
    );
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