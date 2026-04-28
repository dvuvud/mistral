import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AdminService, ChildWithGroupResponse, GroupResponse } from '../../../core/admin/admin.service';
import { interval } from 'rxjs';

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

  groups: GroupResponse[] = [];
  children: ChildWithGroupResponse[] = [];

  form = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    groupId: [null]
  });

  //skickar till parent --> kan uppdatera listan
  @Output() childAdded = new EventEmitter<void>();

  ngOnInit(): void {
    this.adminService.getGroups().subscribe({
      next: (GroupResponse) => this.groups = GroupResponse
    })

    interval(1000).subscribe(() => {
      this.adminService.getChildren().subscribe({
        next: (children: ChildWithGroupResponse[]) => this.children = children
      });
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.adminService.createChild(this.form.value.firstName + " " + this.form.value.lastName).subscribe({
        next: () => {
          this.childAdded.emit();
          this.form.reset();
        },
        error: (err) => console.error(err)
      });
    }
  }
}
