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

@Component({
  selector: 'main-panel',
  imports: [ChildList, MatDividerModule, ChildDisplay, MatCard, MatCardHeader, MatCardContent, MainLiveJournal, AccountPage],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
export class MainPanel implements OnInit{
  
  childSignal = signal<Child>({ name: '', id: 0, date: "", present: false });
  contentSignal = model.required<string>(); 
  groupSignal = signal<groupResponse>({name: '', id: 0});
  allGroups = signal<groupResponse[]>([]);
  private groupService = inject(groupService);
  childList = viewChild.required(ChildList);

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
