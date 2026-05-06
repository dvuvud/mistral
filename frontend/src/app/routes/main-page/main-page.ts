import { Component, inject, signal, ViewEncapsulation, viewChild, OnDestroy, OnInit } from '@angular/core';
import { MainPanel } from './main-panel/main-panel';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { WebsocketService, WsAttendanceMessage } from '../../core/websocket/websocket.service';
import { environment } from '../../../environments/environment';
import { groupResponse, groupService } from '../../core/groups/group.service';

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
  
  contentSignal = signal<displayedContent>('');
  private router = inject(Router);
  private socketService = inject(WebsocketService);
  mainPanel = viewChild.required(MainPanel);

  ngOnInit() {
    this.socketService.connect(`${environment.wsUrl}/ws`, "group=Nyckelpigorna");
    this.contentSignal.set('homeView')
    this.socketService.getMessages().subscribe((message) => {
      if (!("childId" in message)) {
        console.error("Attendance message with incorrect body!");
        return;
      }
      const msg: WsAttendanceMessage = message;
      this.handleWebsocketMessage(msg);
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
