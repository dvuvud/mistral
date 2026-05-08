import { Component, input } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { User } from '../../../core/user/user.service';

@Component({
  selector: 'main-presence-indicator',
  imports: [MatTooltipModule],
  templateUrl: './main-presence-indicator.html',
  styleUrl: './main-presence-indicator.scss',
})
export class MainPresenceIndicator {

  teacher = input.required<User>();
}
