import { Component, OnInit, inject, signal, EventEmitter, Output } from '@angular/core';
import { AdminService, ChildWithGroupResponse, GroupResponse } from '../../../core/admin/admin.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSelect } from '@angular/material/select';
import { DeleteConfirmationDialog } from '../delete-confirmation-dialog/delete-confirmation-dialog';
import { MatDialog } from '@angular/material/dialog';

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
  dialog = inject(MatDialog);
  groups = signal<GroupResponse[]>([]);

  children = signal<ChildWithGroupResponse[]>([]);


  @Output() childGroupChanged = new EventEmitter<void>();
  @Output() childDeleted = new EventEmitter<void>();


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
    const dialogRef = this.dialog.open(DeleteConfirmationDialog)
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (!result) {
        return
      }
      this.adminService.deleteChild(child.id).subscribe({
        next: () => {
          this.children.set(this.children().filter(x => x.id !== child.id));
          this.loadChildren();
          this.childDeleted.emit();
        },
        error: (err) => console.error(err)

      });
    })



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
