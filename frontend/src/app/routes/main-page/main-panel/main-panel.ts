import { Component, EventEmitter, model, Output, signal, viewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ChildDisplay } from "../child-display/child-display";
import { Child } from '../../../core/child/child.service';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { ChildList } from '../main-child-list/main-child-list';
import { MainLiveJournal } from '../main-live-journal/main-live-journal';
import { WsAttendanceMessage, WsMessageContent } from '../../../core/websocket/websocket.service';
import { groupResponse } from '../../../core/groups/group.service';

@Component({
  selector: 'main-panel',
  imports: [ChildList, MatDividerModule, ChildDisplay, MatCard, MatCardHeader, MatCardContent, MainLiveJournal, AccountPage],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
export class MainPanel {
  
  childSignal = signal<Child>({ name: '', id: 0, date: "", present: false });
  groupSignal = model.required<groupResponse>();
  contentSignal = model.required<string>(); 
  
  childList = viewChild.required(ChildList);

  handleWebsocketMessage(message: WsAttendanceMessage) {
    this.childList().handleWebsocketMessage(message);
  }

  @Output() attendanceChangeEvent = new EventEmitter();
  wsUpdateAttendance(msg: WsMessageContent) {
    this.attendanceChangeEvent.emit(msg);
  }

}
