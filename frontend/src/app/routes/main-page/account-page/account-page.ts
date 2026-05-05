import { Component, inject } from '@angular/core';
import { userService } from '../../../core/user/user.service';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'account-page',
  imports: [AsyncPipe, MatCardModule, MatIconModule],
  templateUrl: './account-page.html',
  styleUrl: './account-page.scss',
})
export class AccountPage {
  private userService = inject(userService);
  currentUser = this.userService.getUser(Number(localStorage.getItem('UserId')));
}
