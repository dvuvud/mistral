import { Component, signal } from '@angular/core';
import { MainPanel } from './main-panel/main-panel';
import { Child } from '../../core/child/child.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-main-page',
  imports: [
    MatToolbarModule,
    MainPanel,
    MatSidenavModule,
    MatButtonModule,
    MatCard,
  ],

  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  childSignal = signal<Child>({ name: '', id: 0 });
  
  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl("/");
  }
}
