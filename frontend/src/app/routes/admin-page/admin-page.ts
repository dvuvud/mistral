import { Component, inject, ViewChild } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent, MatCardModule } from "@angular/material/card";
import { AddChildForm } from './add-child-form/add-child-form';
import { ChildAdminList } from './child-admin-list/child-admin-list';
import { Group } from './group/group';
import { InactiveUsers } from './inactive-users/inactive-users';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'admin-page',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardModule,
    AddChildForm,
    ChildAdminList,
    Group,
    InactiveUsers,
    CommonModule,
    MatToolbar,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage {

  //kunna uppdatera
  @ViewChild(AddChildForm) childForm!: AddChildForm;
  @ViewChild(ChildAdminList) childList!: ChildAdminList;
  @ViewChild(Group) group!: Group;



  onChildAdded(): void {
    //uppdaterade listan
    this.childList.loadChildren();
    this.group.loadChildren();
  }

  onChildGroupChanged(): void {
    this.group.loadChildren();
  }

  onGroupCreated(): void {
    this.childForm.loadGroups();
    this.childList.loadGroups();
  }

  private router = inject(Router);
  logout() {
    document.cookie = 'jwtToken=""';
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}

