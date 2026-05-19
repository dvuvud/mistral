import { Component, OnInit, inject, signal, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { AdminService, GroupResponse, ChildWithGroupResponse } from '../../../core/admin/admin.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'group',
  imports: [
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule
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

  groups = signal<GroupResponse[]>([]);
  children = signal<ChildWithGroupResponse[]>([]);

  @Output() groupCreated = new EventEmitter<void>();


  ngOnInit(): void {
    this.loadGroups();
    this.loadChildren();

  }

  loadGroups(): void {
    this.adminService.getGroups().subscribe({
      next: (GroupResponse) => this.groups.set(GroupResponse),
      error: (err) => console.error(err)
    });
  }
  loadChildren(): void {
    this.adminService.getChildren().subscribe({
      next: (children) => this.children.set(children),
      error: (err) => console.log("Error", err)
    });
  }
  //ha kvar bara barnen med samma grupp id + beräkna lägnden
  childCount(groupId: number): number {
    return this.children().filter(x => x.group?.id == groupId).length;
  }

  onCreateGroup(): void {
    if (this.form.valid) {
      this.adminService.createGroup(this.form.value.groupName!).subscribe({
        next: () => {
          this.loadGroups();
          this.groupCreated.emit();
          this.form.reset();
        },
        error: (err: unknown) => console.error(err)
      });
    }
  }



}

