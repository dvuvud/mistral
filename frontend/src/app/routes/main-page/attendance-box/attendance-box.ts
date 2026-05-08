import { Component, input, effect, inject, model, EventEmitter, Output } from '@angular/core';
import { Child } from '../../../core/child/child.service';
import { AttendanceService, AttendanceStatus } from '../../../core/child/attendance.service';
import { WsAttendanceMessage } from '../../../core/websocket/websocket.service';
import { localDateToday } from '../../../core/utils/date-utils';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'attendance-box',
  imports: [MatSelectModule, MatFormFieldModule],
  templateUrl: './attendance-box.html',
  styleUrl: './attendance-box.scss',
})
export class AttendanceBox {
  childSignal = model.required<Child>();
  disabled = input<boolean>();
  errorMessage = '';

  readonly statusOptions: { value: AttendanceStatus; label: string }[] = [
    { value: 'NOT_SET',     label: '—'         },
    { value: 'CHECKED_IN',  label: 'Incheckad' },
    { value: 'CHECKED_OUT', label: 'Utcheckad' },
    { value: 'LEAVE',       label: 'Ledig'      },
    { value: 'ABSENT',      label: 'Frånvarande' },
  ];

  readonly statusLabels = Object.fromEntries(
    this.statusOptions.map(o => [o.value, o.label])
  ) as Record<AttendanceStatus, string>;

  private attendanceService = inject(AttendanceService);

  get currentStatus(): AttendanceStatus {
    return this.attendanceService.getSignal(this.childSignal().id, localDateToday())() ?? 'NOT_SET';
  }

  constructor() {
    effect(() => {
      const child = this.childSignal();
      if (!child) return;

      const sig = this.attendanceService.getSignal(child.id, localDateToday());
      if (sig() === null) {
        sig.set(child.status ?? 'NOT_SET');
      }
    });
  }

  onStatusChange(newStatus: AttendanceStatus) {
    const sig = this.attendanceService.getSignal(this.childSignal().id, localDateToday());
    const previousStatus = sig();
    sig.set(newStatus);

    this.attendanceService.setAttendance(this.childSignal().id, localDateToday(), newStatus).subscribe({
      next: (data) => sig.set(data.status),
      error: (err) => {
        console.error('Kunde inte spara', err);
        sig.set(previousStatus);
        this.errorMessage = 'Misslyckades att spara till databasen.';
        setTimeout(() => this.errorMessage = '', 2000);
      },
    });

    this.wsUpdateAttendance(newStatus);
  }

  @Output() attendanceChangeEvent = new EventEmitter();
  wsUpdateAttendance(status: AttendanceStatus) {
    const msg: WsAttendanceMessage = {
      childId: this.childSignal().id,
      status
    };
    this.attendanceChangeEvent.emit(msg);
  }
}
