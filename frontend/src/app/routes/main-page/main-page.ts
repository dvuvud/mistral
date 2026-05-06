import { Component, inject, signal, ViewEncapsulation, viewChild, OnDestroy, OnInit } from '@angular/core';
import { MainPanel } from './main-panel/main-panel';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { WebsocketService, WsAttendanceMessage, WsMailbox } from '../../core/websocket/websocket.service';
import { environment } from '../../../environments/environment';
import { groupResponse, groupService } from '../../core/groups/group.service';
import { Presence } from '../../core/presence/presence.service';

type displayedContent = 'childview' | 'groupView' | 'teacherView' | 'homeView' | '';

@Component({
  selector: 'main-page',
  imports: [
    MatToolbarModule,
    MainPanel,
    MatSidenavModule,
    MatButtonModule,
    MatTabGroup,
    MatTab
  ],
  encapsulation: ViewEncapsulation.Emulated,

  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})

export class MainPage implements OnInit, OnDestroy {
<<<<<<< HEAD
  
=======

  groupSignal = signal<groupResponse>({name: '', id: 0});
  allGroups = signal<groupResponse[]>([]);
>>>>>>> e0b5dfd (Websocket service rewrite)
  contentSignal = signal<displayedContent>('');
  private router = inject(Router);
  private presence = inject(Presence);
  private socketService = inject(WebsocketService);
  mainPanel = viewChild.required(MainPanel);

<<<<<<< HEAD
  ngOnInit() {
    this.socketService.connect(`${environment.wsUrl}/ws`, "group=Nyckelpigorna");
    this.contentSignal.set('homeView')
    this.socketService.getMessages().subscribe((message) => {
=======
  async ngOnInit() {
    this.loadGroups();
    this.socketService.connect(`${environment.wsUrl}/ws`);
    await this.socketService.ensureConnected();
    this.socketService.setAttendanceRoom("group=Nyckelpigorna");
    this.presence.init();
    this.socketService.getMessages(WsMailbox.attendance).subscribe((message) => {
>>>>>>> e0b5dfd (Websocket service rewrite)
      if (!("childId" in message)) {
        console.error("Attendance message with incorrect body!");
        return;
      }
      console.log(message as WsAttendanceMessage);
      this.handleWebsocketMessage(message as WsAttendanceMessage);
    });
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  handleWebsocketMessage(message: WsAttendanceMessage) {
    this.mainPanel().handleWebsocketMessage(message);
  }

  wsUpdateAttendance(msg: WsAttendanceMessage) {
    this.socketService.sendAttendanceUpdate(msg);
  }

<<<<<<< HEAD
=======
  onTabChange(event: MatTabChangeEvent) {
    const clickedIndex = event.index;
    const currentGroup = this.allGroups()[clickedIndex];
    this.contentSignal.set('groupView');
    this.groupSignal.set(currentGroup);
  }

>>>>>>> e0b5dfd (Websocket service rewrite)
  logout() {
    document.cookie = 'jwtToken=""';
    localStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    this.router.navigateByUrl('/');
  }

  minaSidor() {
    this.contentSignal.set('teacherView');
  }

  hem() {
    this.contentSignal.set('homeView');
  }
}
