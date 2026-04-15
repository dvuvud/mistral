import { Component, input, model } from '@angular/core';
import { ChildList } from '../main-child-list/main-child-list';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { ChildDisplay } from "../child-display/child-display";
import { AttendanceBox } from '../attendance-box/attendance-box';

/*
import { ChildList } from '../main-child-list/main-child-list';
*/

@Component({
  selector: 'main-panel',
  imports: [ChildList, MatDividerModule, ChildDisplay, AttendanceBox],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
export class MainPanel {
    childSignal = model.required<string>();
}
