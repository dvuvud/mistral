import { Component, model } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ChildDisplay } from "../child-display/child-display";
import { AttendanceBox } from '../attendance-box/attendance-box';
import { Child } from '../../../core/child/child.service';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { ChildList } from '../main-child-list/main-child-list';
import { MainLiveJournal } from '../main-live-journal/main-live-journal';

@Component({
  selector: 'main-panel',
  imports: [ChildList, MatDividerModule, ChildDisplay, AttendanceBox, MatCard, MatCardHeader, MatCardContent, MainLiveJournal],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
export class MainPanel {
  months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti",
    "September", "Oktober", "November", "December"];
  days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
  childSignal = model.required<Child>();
  getDate() {
    const d = new Date();
    return `${this.days[d.getDay()]} ${d.getDate()} ${this.months[d.getMonth()]} ${d.getFullYear()}`
  }
}
