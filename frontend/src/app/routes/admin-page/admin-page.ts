import { Component, inject, ViewChild } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent, MatCardModule } from "@angular/material/card";
import { AddChildForm } from './add-child-form/add-child-form';
import { ChildAdminList } from './child-admin-list/child-admin-list';
import { CommonModule } from '@angular/common';
import { Group } from './group/group';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';


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
    CommonModule,
    MatToolbar
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage {

  //kunna uppdatera efter insättning
  @ViewChild('childList') childList!: ChildAdminList

  onChildAdded(): void {
    //uppdaterade listan
    this.childList.loadChildren();
  }

  private router = inject(Router);
  logout() {
    document.cookie = 'jwtToken=""';
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}

