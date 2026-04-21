import { Component, inject, signal, ViewEncapsulation, viewChild, OnDestroy, OnInit } from '@angular/core';
import { MainPanel } from './main-panel/main-panel';
import { Child } from '../../core/child/child.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { AttendanceService } from '../../core/child/attendance.service';
import { WebsocketService } from '../../core/websocket/websocket.service';

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
  
  childSignal = signal<Child>({ name: '', id: 0, date: "", present: false });
  private router = inject(Router);
  private socketService = inject(WebsocketService);
  mainPanel = viewChild.required(MainPanel);

  testMessage = '{"childID": 1, "present": "true"}';

  ngOnInit() {
    this.socketService.getMessages().subscribe((message) => {
      this.handleWebsocketMessage(message);
    });
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  handleWebsocketMessage(message: string) {
    this.mainPanel().handleWebsocketMessage(message);
  }

  logout() {
    document.cookie = 'jwtToken=""';
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}
