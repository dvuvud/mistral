import { Component, model } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ChildDisplay } from "../child-display/child-display";
import { AttendanceBox } from '../attendance-box/attendance-box';
import { Child } from '../../../core/child/child.service';
import { MatCard } from '@angular/material/card';
import { ChildList } from '../main-child-list/main-child-list';

@Component({
  selector: 'app-main-panel',
  imports: [ChildList, MatDividerModule, ChildDisplay, AttendanceBox, MatCard],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
export class MainPanel {
    childSignal = model.required<Child>();
}
