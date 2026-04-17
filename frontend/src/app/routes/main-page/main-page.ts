import { Component, signal } from '@angular/core';
import { MainPanel } from './main-panel/main-panel';
import { Child } from '../../core/child/child.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

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
  childSignal = signal<Child>({ name: '', id: 0 });

  private router: Router = inject(Router);

  logout() {
    this.router.navigateByUrl("/");
  }
}
