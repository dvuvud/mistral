import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { AdminService, ChildWithGroupResponse, GroupResponse } from '../../../core/admin/admin.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { interval } from 'rxjs';
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
  children: ChildWithGroupResponse[] = [];

  ngOnInit(): void {
    this.adminService.getAllGroups().subscribe({
      next: (GroupResponse) => this.groups = GroupResponse,
      error: (err: unknown) => console.error(err)
    });

    //hämta alla barn för att räkna antal barn/grupp
    this.adminService.getAllChildren().subscribe({
      next: (children: ChildWithGroupResponse[]) => this.children = children
    });

    interval(1000).subscribe(() => {
      this.adminService.getAllChildren().subscribe({
        next: (children: ChildWithGroupResponse[]) => this.children = children
      });
    })

  }
  //ha kvar bara barnen med samma grupp id + beräkna lägnden
  childCount(groupId: number): number {
    return this.children.filter(x => x.group?.id == groupId).length;
  }

  onCreateGroup(): void {
    if (this.form.valid) {
      this.adminService.createGroup(this.form.value.groupName!).subscribe({
        next: () => {
          this.adminService.getAllGroups().subscribe({
            next: (GroupResponse) => this.groups = GroupResponse,
            error: (err: unknown) => console.error(err)
          });
          this.form.reset();
        },
        error: (err: unknown) => console.error(err)
      });
    }
  }

}

