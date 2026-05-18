import { Component, computed, EventEmitter, inject, model, OnInit, Output, signal, viewChild } from '@angular/core';
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
import { Presence } from '../../../core/presence/presence.service';
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { MatFormField } from "@angular/material/form-field";
import { Information } from '../information/information';
import { Homepage } from "../homepage/homepage";
import { History } from '../history/history';

@Component({
  selector: 'main-panel',
  imports: [ChildList, MatDividerModule, ChildDisplay, MatCard, MatCardHeader, MatCardContent, MainLiveJournal, AccountPage, MainPresenceContainer, MatTab, MatTabGroup, Information, Homepage, History],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
export class MainPanel implements OnInit{
  presence = inject(Presence);
  childSignal = signal<Child>({ name: '', id: 0, date: "", status: "NOT_SET" });
  contentSignal = model.required<string>();
  groupSignal = signal<groupResponse>({name: '', id: 0});
  allGroups = signal<groupResponse[]>([]);
  private groupService = inject(groupService);
  childList = viewChild.required(ChildList);
  teachers = [{}]
  dateSignal = signal<string>('');

  months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti",
    "September", "Oktober", "November", "December"];
  days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

  ngOnInit() {
    this.dateSignal.set(this.getDate())
    this.loadGroups();
  }

  reportTitle = computed(() => {
    switch(this.contentSignal()) {
      case('childView'):
        return this.childSignal().name + 's' + ' dagsrapport';
      case('groupView'):
        return this.groupSignal().name + 's' + ' dagsrapport';
      default:
        return 'ERROR'
    }
  })

  getDate() {
    const d = new Date();
    return `${this.days[d.getDay()]} ${d.getDate()} ${this.months[d.getMonth()]} ${d.getFullYear()}`
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
