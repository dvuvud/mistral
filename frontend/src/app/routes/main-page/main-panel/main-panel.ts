import { Component, EventEmitter, inject, model, OnInit, Output, signal, viewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ChildDisplay } from "../child-display/child-display";
import { Child } from '../../../core/child/child.service';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { ChildList } from '../main-child-list/main-child-list';
import { MainLiveJournal } from '../main-live-journal/main-live-journal';
import { WsAttendanceMessage, WsMessageContent } from '../../../core/websocket/websocket.service';
import { groupResponse, groupService } from '../../../core/groups/group.service';
import { AccountPage } from '../account-page/account-page';
import { MainPresenceContainer } from "../main-presence-container/main-presence-container";

@Component({
  selector: 'main-panel',
  imports: [ChildList, MatDividerModule, ChildDisplay, MatCard, MatCardHeader, MatCardContent, MainLiveJournal, AccountPage, MainPresenceContainer],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
<<<<<<< HEAD
export class MainPanel implements OnInit{
  
  childSignal = signal<Child>({ name: '', id: 0, date: "", present: false });
  contentSignal = model.required<string>(); 
  groupSignal = signal<groupResponse>({name: '', id: 0});
  allGroups = signal<groupResponse[]>([]);
  private groupService = inject(groupService);
=======
export class MainPanel {

  childSignal = signal<Child>({ name: '', id: 0, date: "", present: false });
  groupSignal = model.required<groupResponse>();
  contentSignal = model.required<string>();

>>>>>>> e0b5dfd (Websocket service rewrite)
  childList = viewChild.required(ChildList);
  teachers = [{}]

  ngOnInit() {
    this.loadGroups();
  }

  loadGroups() {
    this.groupService.getGroups().subscribe({
      next: (data) => {
        this.allGroups.set(data);
      }
    });
  }

  handleWebsocketMessage(message: WsAttendanceMessage) {
    this.childList().handleWebsocketMessage(message);
  }

  @Output() attendanceChangeEvent = new EventEmitter();
  wsUpdateAttendance(msg: WsMessageContent) {
    this.attendanceChangeEvent.emit(msg);
  }

}
