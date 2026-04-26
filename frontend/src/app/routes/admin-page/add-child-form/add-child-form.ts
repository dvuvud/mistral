import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChildService, GroupData } from '../../../core/child/child.service';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
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

  private childService = inject(ChildService);

  groups: GroupData[] = [];

  //output?

  form = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    groupId: [null]

    //id?
  });

  //skickar till parent --> kan uppdatera listan
  @Output() childAdded = new EventEmitter<void>();

  ngOnInit(): void {
    this.childService.getGroups().subscribe({
      next: (GroupData) => this.groups = GroupData
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      const fullName = `${this.form.value.firstName} ${this.form.value.lastName}`;
      this.childService.createChild(fullName).subscribe({
        next: (child) => {
          if (this.form.value.groupId) {
            this.childService.assignChildToGroup(this.form.value.groupId, child.id).subscribe({
              next: () => {
                this.childAdded.emit();
                this.form.reset();

                //error-section
              }
            })
          }
          else {
            this.childAdded.emit();
            this.form.reset();
          }
        },

        error: (err) => console.error(err)
      });
    }
  }

}
