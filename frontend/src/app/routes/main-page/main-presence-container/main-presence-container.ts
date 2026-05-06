import { Component, computed, inject, input } from '@angular/core';
import { MainPresenceIndicator } from "../main-presence-indicator/main-presence-indicator";
import { MatCard } from "@angular/material/card";
import { Presence, Teacher } from '../../../core/presence/presence.service';

@Component({
  selector: 'main-presence-container',
  imports: [MainPresenceIndicator, MatCard],
  templateUrl: './main-presence-container.html',
  styleUrl: './main-presence-container.scss',
})
export class MainPresenceContainer {
  private presence = inject(Presence);
  filter = input.required<string>();
  isGroup = input<string>("");
  teachers = computed(() => {
    return this.presence.connectedTeachers().filter((element: Teacher) => {
      const searchString = this.isGroup() == "" ? "child:" + this.filter() : "group:" + this.filter();
      console.log("From computed", searchString);
      return element.room.includes(searchString);
    });
    //console.log("From container init: ", filtered)
    //return filtered;
  });
}
