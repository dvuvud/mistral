import { Component, inject, signal, ViewEncapsulation, viewChild, OnDestroy, OnInit } from '@angular/core';
import { MainPanel } from './main-panel/main-panel';
import { Child } from '../../core/child/child.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { WebsocketService, WsAttendanceMessage } from '../../core/websocket/websocket.service';
import { environment } from '../../../environments/environment';
import { groupResponse, groupService } from '../../core/groups/group.service';


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
  
  groupNameSignal = signal<string>('');
  allGroups = signal<groupResponse[]>([]);
  childSignal = signal<Child>({ name: '', id: 0, date: "", present: false });
  private router = inject(Router);
  private socketService = inject(WebsocketService);
  private groupService = inject(groupService);
  mainPanel = viewChild.required(MainPanel);

  ngOnInit() {
    this.socketService.connect(`${environment.wsUrl}/ws`, "group=Nyckelpigorna");
    this.loadGroups();
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

  loadGroups() {
    this.groupService.getGroups().subscribe({
      next: (data) => {
        this.allGroups.set(data);
      }
    });
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
    this.router.navigateByUrl('/');
  }
}
