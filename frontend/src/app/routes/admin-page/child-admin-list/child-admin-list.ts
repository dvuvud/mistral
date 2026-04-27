import { Component, OnInit, inject } from '@angular/core';
import { ChildService, Child, GroupData } from '../../../core/child/child.service';
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
    MatSelectModule
  ],
  templateUrl: './child-admin-list.html',
  styleUrl: './child-admin-list.scss',
})


export class ChildAdminList implements OnInit {

  private childService = inject(ChildService);

  groups: GroupData[] = [];

  children: Child[] = [];

  ngOnInit(): void {
    this.loadChildren();
    this.childService.getGroups().subscribe({
      next: (groups) => this.groups = groups,
      error: (err) => console.error(err)
    });

  }

  loadChildren(): void {
    this.childService.getAll().subscribe({
      next: (children) => this.children = [...children],
      error: (err) => console.log("Error", err)
    });
  }

  onDelete(child: Child): void {
    this.childService.deleteChild(child.id).subscribe({
      next: () => this.children = this.children.filter(x => x.id !== child.id),
      error: (err) => console.error(err)

    });

  }

  onMove(child: Child, groupId: number): void {
    this.childService.assignChildToGroup(groupId, child.id).subscribe({
      next: () => this.loadChildren(),
      error: (err) => console.error(err)
    });

  }

}
