import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ChildService, GroupData } from '../../../core/child/child.service';
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

  private childService = inject(ChildService);

  private fb = inject(FormBuilder)

  form = this.fb.group({
    groupName: ["", Validators.required]
  });

  groups: GroupData[] = [];

  ngOnInit(): void {

    this.childService.getGroups().subscribe({
      next: (groups) => this.groups = groups,
      error: (err) => console.error(err)
    });

  }

  onCreateGroup(): void {
    if (this.form.valid) {
      this.childService.createGroup(this.form.value.groupName!).subscribe({
        next: () => {
          this.childService.getGroups().subscribe({
            next: (groups) => this.groups = groups,
            error: (err) => console.error(err)
          });
          this.form.reset();
        },
        error: (err) => console.error(err)
      });
    }
  }

}

