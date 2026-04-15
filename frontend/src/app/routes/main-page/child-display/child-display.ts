import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child-display',
  imports: [],
  templateUrl: './child-display.html',
  styleUrl: './child-display.scss',
})
export class ChildDisplay {
  childSignal = model.required<string>();
}
