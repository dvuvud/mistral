import { Component, OnInit, inject } from '@angular/core';
import { AdminService, ChildWithGroupResponse, GroupResponse } from '../../../core/admin/admin.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'child-admin-list',
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,

  ],
  templateUrl: './child-admin-list.html',
  styleUrl: './child-admin-list.scss',
})


export class ChildAdminList implements OnInit {

  private adminService: AdminService = inject(AdminService);

  groups: GroupResponse[] = [];

  children: ChildWithGroupResponse[] = [];

  ngOnInit(): void {
    this.loadChildren();
    this.adminService.getAllGroups().subscribe({
      next: (groups: GroupResponse[]) => this.groups = groups,
      error: (err: any) => console.error(err)
    });

  }

  loadChildren(): void {
    this.adminService.getAllChildren().subscribe({
      next: (children: ChildWithGroupResponse[]) => this.children = [...children],
      error: (err: any) => console.log("Error", err)
    });
  }

  onDelete(child: ChildWithGroupResponse): void {
    this.adminService.deleteChild(child.id).subscribe({
      next: () => this.children = this.children.filter(x => x.id !== child.id),
      error: (err: any) => console.error(err)

    });

  }

  onMove(child: ChildWithGroupResponse, groupId: number): void {
    this.adminService.assignChildToGroup(groupId, child.id).subscribe({
      next: () => this.loadChildren(),
      error: (err: any) => console.error(err)
    });

  }

}
