import { Component, inject, signal, ViewEncapsulation, viewChild } from '@angular/core';
import { MainPanel } from './main-panel/main-panel';
import { Child } from '../../core/child/child.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { AttendanceService } from '../../core/child/attendance.service';

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
export class MainPage {
  childSignal = signal<Child>({ name: '', id: 0, date: "", present: false });
  private router = inject(Router);
  mainPanel = viewChild.required(MainPanel);

  testMessage = '{"childID": 1, "present": "true"}';

  handleWebsocketMessage(message: string) {
    this.mainPanel().handleWebsocketMessage(message);
  }

  logout() {
    document.cookie = 'jwtToken=""';
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}
