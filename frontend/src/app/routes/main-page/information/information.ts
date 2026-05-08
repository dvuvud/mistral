import { Component, model } from '@angular/core';
import { Child } from '../../../core/child/child.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCard, MatCardHeader } from "@angular/material/card";
import { MatInput, MatFormField } from "@angular/material/input";

@Component({
  selector: 'information',
  imports: [MatTabsModule, MatCard, MatInput, MatFormField, MatCardHeader],
  templateUrl: './information.html',
  styleUrl: './information.scss',
})
export class Information {
  childSignal = model.required<Child>();
}
