import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent, MatCardModule } from "@angular/material/card";
import { AddChildForm } from './add-child-form/add-child-form';
import { ChildAdminList } from './child-admin-list/child-admin-list';
import { CommonModule } from '@angular/common';
import { Group } from './group/group';

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
    CommonModule
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage {

}
