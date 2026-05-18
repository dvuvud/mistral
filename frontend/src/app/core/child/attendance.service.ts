import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * AttendanceStatus represents the attendance status of a child for a specific date.
 * - 'NOT_SET': No attendance status has been set for the child on this date.
 * - 'CHECKED_IN': The child is checked in for the day.
 * - 'CHECKED_OUT': The child is checked out for the day.
 * - 'LEAVE': The child is on leave, can only be registered by staff.
 * - 'ABSENT': The child is pre‑reported absence, can be registered by a guardian or staff.
 */
export type AttendanceStatus = 'NOT_SET' | 'CHECKED_IN' | 'CHECKED_OUT' | 'LEAVE' | 'ABSENT';

/**
 * AttendanceInfo represents the attendance information for a child on a specific date.
 * It includes the attendance status, check-in time, and check-out time.
 */
export interface AttendanceInfo {
  status: AttendanceStatus;
  checkInTime: string | null;
  checkOutTime: string | null;
}

/**
 * SetAttendanceRequest represents the data sent to the backend when setting the attendance status for a child on a specific date.
 * It includes the child ID, date, and the new attendance status.
 */
interface SetAttendanceRequest {
  childId: number;
  date: string;
  status: AttendanceStatus;
}

@Injectable({ providedIn: 'root' })
export class AttendanceService {

  private url = `${environment.apiUrl}/api/attendance`;
  private attendanceSignals = new Map<string, ReturnType<typeof signal<AttendanceStatus | null>>>();
  private attendanceChanges = new ReplaySubject<SetAttendanceRequest>();
  private http = inject(HttpClient);

  readonly getAttendanceChanges = this.attendanceChanges.asObservable();

  /**
   * Gets the signal for a specific child's attendance on a specific date.
   * If the signal does not exist, it is created.
   *
   * @param childId The ID of the child.
   * @param dateStr The date.
   * @returns The signal representing the attendance status of the child on the specified date.
   */
  getSignal(childId: number, dateStr: string) {
    const key = `${childId}_${dateStr}`;
    if (!this.attendanceSignals.has(key)) {
      this.attendanceSignals.set(key, signal<AttendanceStatus | null>(null));
    }
    return this.attendanceSignals.get(key)!;
  }

  /**
   * Sets the attendance status for a child on a specific date.
   *
   * @param childId The ID of the child.
   * @param date The date.
   * @param status The new attendance status for the child.
   * @returns An Observable with the updated attendance information from the backend.
   */
  setAttendance(childId: number, date: string, status: AttendanceStatus): Observable<AttendanceInfo> {
    const data: SetAttendanceRequest = {
      childId,
      date,
      status,
    };
    this.attendanceChanges.next(data);
    return this.http.put<AttendanceInfo>(this.url, data);
  }
}
