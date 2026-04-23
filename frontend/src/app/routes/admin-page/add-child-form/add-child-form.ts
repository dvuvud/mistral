import { Component, inject } from '@angular/core';
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
  })


  onSubmit(): void {

    
  }

}
