import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AdminService, ChildWithGroupResponse, GroupResponse } from '../../../core/admin/admin.service';
@Component({
  selector: 'add-child-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './add-child-form.html',
  styleUrl: './add-child-form.scss',
})
export class AddChildForm implements OnInit {
  private fb = inject(FormBuilder);

  private adminService = inject(AdminService);

  groups = signal<GroupResponse[]>([]);
  children = signal<ChildWithGroupResponse[]>([]);

  form = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    groupId: [null]

  });

  //skickar till parent --> kan uppdatera listan
  @Output() childAdded = new EventEmitter<void>();

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.adminService.getGroups().subscribe({
      next: (GroupResponse) => this.groups.set(GroupResponse),
      error: (err) => console.error(err)
    });
  }


  onSubmit(): void {
    if (this.form.valid) {
      const fullName = `${this.form.value.firstName} ${this.form.value.lastName}`;
      this.adminService.createChild(fullName).subscribe({
        next: (child) => {
          if (this.form.value.groupId) {
            this.adminService.assignChildToGroup(this.form.value.groupId, child.id).subscribe({
              next: () => {
                this.childAdded.emit();
                this.form.reset();
              }
            });
          } else {
            this.childAdded.emit();
            this.form.reset();
          }
        },

        error: (err) => console.error(err)
      });
    }
  }

}
