import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { JournalService, JournalResponse } from '../../../core/journal/journal.service';
import { Child } from '../../../core/child/child.service';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'history',
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {  

  childSignal = model.required<Child>();
  journalService = inject(JournalService);
  selected = signal<Date | null>(null);
  currentJournal = signal<JournalResponse | null>(null)

  yesterday = new Date();
  
  constructor() {

    this.yesterday.setDate(this.yesterday.getDate() - 1);

    effect((onCleanup) => {
      console.log(this.selected())
      const date = this.selected();
      const childId = this.childSignal().id;

      if (!date) {
        this.currentJournal.set(null);
        return; 
      }

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const day = String(date.getDate()).padStart(2, '0');

      const dateToSearch = `${year}-${month}-${day}`;

      const subscription = this.journalService.getJournalByDate(childId, dateToSearch).subscribe({
              next: (data) => {
                this.currentJournal.set(data);
              }
            });

      onCleanup(() => {
          subscription.unsubscribe();
      });

    })
  }
}
