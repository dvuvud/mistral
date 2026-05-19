import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { JournalService, JournalResponse } from '../../../core/journal/journal.service';
import { Child } from '../../../core/child/child.service';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AttendanceStatus } from '../../../core/child/attendance.service';
import { AttendanceBox } from '../attendance-box/attendance-box';
import { AttendanceService } from '../../../core/child/attendance.service';
import { MatDivider } from "@angular/material/divider";


@Component({
  selector: 'history',
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule, MatDivider],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {  

  childSignal = model.required<Child>();
  journalService = inject(JournalService);
  attendanceService = inject(AttendanceService);
  selected = signal<Date | null>(null);
  currentJournal = signal<JournalResponse | null>(null)
  currentChildAttendance:string | undefined = '';
  dateLabel = '';
  yesterday = new Date();

  readonly statusOptions: { value: string; label: string }[] = [
    { value: 'NOT_SET',     label: '—'         },
    { value: 'CHECKED_IN',  label: 'Incheckad' },
    { value: 'CHECKED_OUT', label: 'Utcheckad' },
    { value: 'LEAVE',       label: 'Ledig'      },
    { value: 'ABSENT',      label: 'Frånvarande' },
  ];

  months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti",
    "September", "Oktober", "November", "December"];
  days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];


  constructor() {

    this.yesterday.setDate(this.yesterday.getDate() - 1);

    effect((onCleanup) => {
      const date = this.selected();
      const childId = this.childSignal().id;

      if (!date) {
        this.currentJournal.set(null);
        return; 
      }

      this.dateLabel = `${this.days[date.getDay()]} ${date.getDate()} ${this.months[date.getMonth()]} ${date.getFullYear()}`

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const day = String(date.getDate()).padStart(2, '0');

      const dateToSearch = `${year}-${month}-${day}`;

      const attendance = this.attendanceService.getSignal(this.childSignal().id, dateToSearch)() ?? 'NOT_SET';
      this.currentChildAttendance = this.statusOptions.find(({value, label}) => value === attendance)?.label;

      const journalSubscription = this.journalService.getJournalByDate(childId, dateToSearch).subscribe({
        next: (data) => {
          this.currentJournal.set(data);
        }
      });

      onCleanup(() => {
          journalSubscription.unsubscribe();
      });

    })
  }
}
