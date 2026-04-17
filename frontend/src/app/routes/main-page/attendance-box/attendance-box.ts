import { Component, input, effect, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Child } from '../../../core/child/child.service';
import { AttendanceService } from '../../../core/child/attendance.service';

@Component({
  selector: 'app-attendance-box',
  imports: [MatCheckboxModule],
  templateUrl: './attendance-box.html',
  styleUrl: './attendance-box.scss',
})
export class AttendanceBox {
  childSignal = input.required<Child>();
  errorMessage = '';

  get dateStr() {
    return new Date().toISOString().split('T')[0];
  }

  get isChecked(): boolean {
    return this.attendanceService.getSignal(this.childSignal().id, this.dateStr)() ?? false;
  }

  private attendanceService = inject(AttendanceService);

  constructor() {
    effect(() => {
      const child = this.childSignal();
      if (!child) return;

      const sig = this.attendanceService.getSignal(child.id, this.dateStr);
      if (sig() === null) {
        this.attendanceService.getAttendance(child.id, this.dateStr).subscribe({
          next: (data) => sig.set(data.present),
          error: (err) => console.error('Kunde inte hämta', err),
        });
      }
    });
  }

  onCheckBox(event: { checked: boolean }) {
    const newStatus = event.checked;
    const sig = this.attendanceService.getSignal(this.childSignal().id, this.dateStr);
    sig.set(newStatus);

    this.attendanceService.setAttendance(this.childSignal().id, this.dateStr, newStatus).subscribe({
      next: (data) => sig.set(data.present),
      error: (err) => {
        console.error('Kunde inte spara', err);
        sig.set(!newStatus);
        this.errorMessage = 'Misslyckades att spara till databasen.';
        setTimeout(() => this.errorMessage = '', 2000);
      },
    });
  }
}
