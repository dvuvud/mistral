import { Component, model } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-child-display',
  imports: [MatCheckbox],
  templateUrl: './child-display.html',
  styleUrl: './child-display.scss',
})
export class ChildDisplay {
  childSignal = model.required<string>();
}
