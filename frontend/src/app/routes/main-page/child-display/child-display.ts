import { Component, EventEmitter, model, Output } from '@angular/core';
import { Child } from '../../../core/child/child.service';
import { AttendanceBox } from "../attendance-box/attendance-box";
import { WsAttendanceMessage } from '../../../core/websocket/websocket.service';

@Component({
  selector: 'child-display',
  imports: [AttendanceBox],
  templateUrl: './child-display.html',
  styleUrl: './child-display.scss',
})
export class ChildDisplay {
  childSignal = model.required<Child>();

  months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti",
    "September", "Oktober", "November", "December"];
  days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

  @Output() attendanceChangeEvent = new EventEmitter();
  wsUpdateAttendance(msg: WsAttendanceMessage) {
    this.attendanceChangeEvent.emit(msg);
  }

  getDate() {
    const d = new Date();
    return `${this.days[d.getDay()]} ${d.getDate()} ${this.months[d.getMonth()]} ${d.getFullYear()}`
  }
}
