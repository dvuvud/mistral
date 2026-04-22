import { Component, OnInit, inject } from '@angular/core';
import { ChildService, Child } from '../../../core/child/child.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'child-admin-list',
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './child-admin-list.html',
  styleUrl: './child-admin-list.scss',
})


export class ChildAdminList implements OnInit {

  private childService = inject(ChildService);

  children: Child[] = [];

  ngOnInit(): void {
    this.loadChildren();

  }

  loadChildren(): void {
    this.childService.getAll().subscribe({
      next: (children) => this.children = children,
      error: (err) => console.log("Error", err)
    });
  }

}
