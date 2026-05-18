import { Component, effect, inject, model, signal } from '@angular/core';
import { JournalService, JournalResponse } from '../../../core/journal/journal.service';
import { Child } from '../../../core/child/child.service';

@Component({
  selector: 'history',
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {  

  childSignal = model.required<Child>();

  journalService = inject(JournalService);
  journalHistory: JournalResponse[] = [{content: '', serverRevision: 0}];

  constructor() {
    effect(() => {
      const currentChildId = this.childSignal().id; 

      this.journalService.getJournalHistory(currentChildId, this.getDates(1)).subscribe({
        next: (data) => {
          this.journalHistory = data;
        }
      });
    });
  }

  getDates(page: number): string[]{
    const datesToLoad = [];
    
    for(let i = 0; i <= page*10; i++) {

      const d = new Date();
      d.setDate(d.getDate() - i);

      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0'); 
      const day = String(d.getDate()).padStart(2, '0');

      datesToLoad[i] = `${year}-${month}-${day}`
    }

    return datesToLoad;
  }
}
