import { CommonModule } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AdminService, BasicUserInformation} from '../../../core/admin/admin.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'all-users',
  imports: [
    MatButtonModule,
    MatListModule,
    MatCardModule,
    CommonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './all-users.html',
  styleUrl: './all-users.scss',
})
export class AllUsers implements OnInit {

  allUsers = signal<BasicUserInformation[]>([]);
  adminService = inject(AdminService);

  ngOnInit(): void {
    this.loadAllTeachers();
  }

  loadAllTeachers(): void {
    this.adminService.getAllTeachers().subscribe({
      next: (users) => this.allUsers.set(users),
      error: (err) => console.error(err)
    });
  }

  activateUser(userId: number): void {
    this.adminService.activateUser(userId).subscribe({
      next: () => this.loadAllTeachers()
    });
  }

  inactivateUser(userId: number): void {
    this.adminService.inactivateUser(userId).subscribe({
      next: () => this.loadAllTeachers()
    });
  }

}
