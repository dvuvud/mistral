import { CommonModule } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AdminService, UserResponse } from '../../../core/admin/admin.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'inactive-users',
  imports: [
    MatButtonModule,
    MatListModule,
    MatCardModule,
    CommonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './inactive-users.html',
  styleUrl: './inactive-users.scss',
})
export class InactiveUsers implements OnInit {

  inactiveUsers = signal<UserResponse[]>([]);
  adminService = inject(AdminService);

  ngOnInit(): void {
    this.loadInactiveUsers();
  }

  loadInactiveUsers(): void {
    this.adminService.getInactiveUsers().subscribe({
      next: (users) => this.inactiveUsers.set(users),
      error: (err) => console.error(err)
    });
  }

  activateUser(userId: number): void {
    this.adminService.activateUser(userId).subscribe({
      next: () => this.loadInactiveUsers()
    });
  }

}
