import { Component, input, effect, inject, model, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { Child } from '../../../core/child/child.service';
import { AttendanceService } from '../../../core/child/attendance.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation-dialog';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'attendance-box',
  imports: [MatCheckboxModule],
  templateUrl: './attendance-box.html',
  styleUrl: './attendance-box.scss',
})
export class AttendanceBox {
  childSignal = model.required<Child>();
  disabled = input<boolean>();
  errorMessage = '';
  dialog = inject(MatDialog);

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
        if (child.present === null) {
          sig.set(false);
        } else {
          sig.set(child.present);
        }
      }
    });
  }

  async onCheckBox(event: MatCheckboxChange) {

    const newStatus = event.checked;

    if (newStatus === false) {
      event.source.checked = true;

      const confirmed = await this.confirmation();

      if(!confirmed) { // early return
        return;
      }
    }

    const sig = this.attendanceService.getSignal(this.childSignal().id, this.dateStr);
    sig.set(newStatus);

    this.attendanceService.setAttendance(this.childSignal().id, this.dateStr, newStatus).subscribe({
      next: (data) => sig.set(data.present),
      error: (err) => {
        console.error('Kunde inte spara', err);
        sig.set(!newStatus);
        event.source.checked = !newStatus;
        this.errorMessage = 'Misslyckades att spara till databasen.';
        setTimeout(() => this.errorMessage = '', 2000);
      },
    });

    this.wsUpdateAttendance(event.checked)
  }

  @Output() attendanceChangeEvent = new EventEmitter();
  wsUpdateAttendance(checked: boolean) {
    this.attendanceChangeEvent.emit({childId: this.childSignal().id, present: checked});
  }

  async confirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      height: '120px',
      width: '400px',
    });
    const result = await firstValueFrom(dialogRef.afterClosed());
    return result;
  }
}
