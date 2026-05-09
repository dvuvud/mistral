import { Component, inject, signal, ViewEncapsulation, viewChild, OnDestroy, OnInit } from '@angular/core';
import { MainPanel } from './main-panel/main-panel';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { WebsocketService, WsAttendanceMessage, WsMailbox } from '../../core/websocket/websocket.service';
import { environment } from '../../../environments/environment';
import { groupResponse } from '../../core/groups/group.service';
import { Presence } from '../../core/presence/presence.service';

type displayedContent = 'childview' | 'groupView' | 'teacherView' | 'homeView' | '';

@Component({
  selector: 'main-page',
  imports: [
    MatToolbarModule,
    MainPanel,
    MatSidenavModule,
    MatButtonModule,
  ],
  encapsulation: ViewEncapsulation.Emulated,

  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})

export class MainPage implements OnInit, OnDestroy {

  groupSignal = signal<groupResponse>({name: '', id: 0});
  allGroups = signal<groupResponse[]>([]);
  contentSignal = signal<displayedContent>('');
  private router = inject(Router);
  private presence = inject(Presence);
  private socketService = inject(WebsocketService);
  mainPanel = viewChild.required(MainPanel);

  async ngOnInit() {
    this.contentSignal.set('homeView')
    this.socketService.connect(`${environment.wsUrl}/ws`);
    await this.socketService.ensureConnected();
    this.presence.init();
    this.socketService.getMessages(WsMailbox.attendance).subscribe((message) => {
      if (!("childId" in message)) {
        console.error("Attendance message with incorrect body!");
        return;
      }
      console.log(message as WsAttendanceMessage);
      this.handleWebsocketMessage(message as WsAttendanceMessage);
    });
  }

  ngOnDestroy() {
    this.socketService.leaveJournalRoom();
  }

  handleWebsocketMessage(message: WsAttendanceMessage) {
    this.mainPanel().handleWebsocketMessage(message);
  }

  wsUpdateAttendance(msg: WsAttendanceMessage) {
    this.socketService.sendAttendanceUpdate(msg);
  }

  onTabChange(event: MatTabChangeEvent) {
    const clickedIndex = event.index;
    const currentGroup = this.allGroups()[clickedIndex];
    this.contentSignal.set('groupView');
    this.groupSignal.set(currentGroup);
    this.presence.spoofTeacherUpdate();
  }

  logout() {
    document.cookie = 'jwtToken=""';
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('UserId');
    this.socketService.disconnect();
    window.location.reload();
  }

  minaSidor() {
    this.contentSignal.set('teacherView');
  }

  hem() {
    this.contentSignal.set('homeView');
  }

  hover(event: Event) {
    console.log(event);
  }
}
