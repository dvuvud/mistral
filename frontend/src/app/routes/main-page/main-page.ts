import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
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

  constructor(private router: Router) { }
  logout() {
    this.router.navigateByUrl("/");
  }
}
