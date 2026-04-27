import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { AdminService, GroupResponse } from '../../../core/admin/admin.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'group',
  imports: [
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule


  ],
  templateUrl: './group.html',
  styleUrl: './group.scss',
})
export class Group implements OnInit {

  private adminService: AdminService = inject(AdminService);

  private fb = inject(FormBuilder)

  form = this.fb.group({
    groupName: ["", Validators.required]
  });

  groups: GroupResponse[] = [];

  ngOnInit(): void {
    this.adminService.getAllGroups().subscribe({
      next: (GroupResponse) => this.groups = GroupResponse,
      error: (err: any) => console.error(err)
    });

  }

  onCreateGroup(): void {
    if (this.form.valid) {
      this.adminService.createGroup(this.form.value.groupName!).subscribe({
        next: () => {
          this.adminService.getAllGroups().subscribe({
            next: (GroupResponse) => this.groups = GroupResponse,
            error: (err: any) => console.error(err)
          });
          this.form.reset();
        },
        error: (err: any) => console.error(err)
      });
    }
  }

}

