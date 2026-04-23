import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChildService } from '../../../core/child/child.service';

@Component({
  selector: 'add-child-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

  ],
  templateUrl: './add-child-form.html',
  styleUrl: './add-child-form.scss',
})
export class AddChildForm {
  private fb = inject(FormBuilder);

  private childService = inject(ChildService);


  //output?

  form = this.fb.group({
    name: ["", Validators.required]
    //id?
  });

  //skickar till parent --> kan uppdatera listan
  @Output() childAdded = new EventEmitter<void>();

  onSubmit(): void {
    if (this.form.valid) {
      this.childService.createChild(this.form.value.name!).subscribe({
        next: () => {
          this.childAdded.emit;
          this.form.reset;
        },

        error: (err) => console.error(err)
      });
    }
  }

}
