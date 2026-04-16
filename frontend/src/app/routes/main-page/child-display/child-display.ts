import { Component, model } from '@angular/core';
import { Child } from '../../../core/child/child.service';

@Component({
  selector: 'app-child-display',
  imports: [],
  templateUrl: './child-display.html',
  styleUrl: './child-display.scss',
})
export class ChildDisplay {
  childSignal = model.required<Child>();
}
