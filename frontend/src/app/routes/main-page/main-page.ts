import { Component, signal } from '@angular/core';
import { MainPanel } from './main-panel/main-panel';
import { ChildList } from './main-child-list/main-child-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-main-page',
  imports: [
    MatToolbarModule,
    MainPanel,
    MatSidenavModule,
    MatButtonModule,
  ],

  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
    childSignal = signal('')
}
