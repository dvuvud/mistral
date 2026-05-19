import { Component, inject, ViewChild } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent, MatCardModule } from "@angular/material/card";
import { AddChildForm } from './add-child-form/add-child-form';
import { ChildAdminList } from './child-admin-list/child-admin-list';
import { Group } from './group/group';
import { AllUsers } from './all-users/all-users';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'admin-page',
  imports: [
    MatCard,
    AddChildForm,
    ChildAdminList,
    Group,
    AllUsers,
    MatCardHeader,
    MatCardContent,
    MatCardModule,
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

  onChildDeleted(): void {
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
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('UserId');
    sessionStorage.removeItem('role');
    window.location.reload();
  }
}

