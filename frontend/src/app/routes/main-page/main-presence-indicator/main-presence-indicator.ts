import { Component, input, signal } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Teacher } from '../../../core/presence/presence.service';


@Component({
  selector: 'main-presence-indicator',
  imports: [MatTooltipModule],
  templateUrl: './main-presence-indicator.html',
  styleUrl: './main-presence-indicator.scss',
})
export class MainPresenceIndicator {

  teacher = input.required<Teacher>();
  color = signal<number>(0);
}
