import { Component, OnInit, inject, signal, EventEmitter, Output } from '@angular/core';
import { AdminService, ChildWithGroupResponse, GroupResponse } from '../../../core/admin/admin.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSelect } from '@angular/material/select';
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

  groups = signal<GroupResponse[]>([]);

  children = signal<ChildWithGroupResponse[]>([]);


  @Output() childGroupChanged = new EventEmitter<void>();


  ngOnInit(): void {
    this.loadChildren();
    this.loadGroups();
  }

  loadGroups(): void {
    this.adminService.getGroups().subscribe({
      next: (GroupResponse) => this.groups.set(GroupResponse),
      error: (err) => console.error(err)
    });
  }

  loadChildren(): void {
    this.adminService.getChildren().subscribe({
      next: (children) => this.children.set([...children].sort((a, b) => a.name.localeCompare(b.name))), //listan får en fast ordning, annars problem med att barnen blir huller om buller när man ändrar deras grupp
      error: (err) => console.log("Error", err)
    });
  }

  onDelete(child: ChildWithGroupResponse): void {
    this.adminService.deleteChild(child.id).subscribe({
      next: () => this.children.set(this.children().filter(x => x.id !== child.id)),
      error: (err) => console.error(err)

    });

  }

  onMove(child: ChildWithGroupResponse, groupId: number, groupSelected: MatSelect): void {
    groupSelected.value = null;
    this.adminService.assignChildToGroup(groupId, child.id).subscribe({
      next: () => {
        this.loadChildren();
        groupSelected.value = null;
        this.childGroupChanged.emit();
      },
      error: (err) => console.error(err)
    });

  }

}
