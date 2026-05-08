import { Component, inject, input, OnInit, signal } from '@angular/core';
import { MainPresenceIndicator } from "../main-presence-indicator/main-presence-indicator";
import { MatCard } from "@angular/material/card";
import { Presence } from '../../../core/presence/presence.service';
import { User } from '../../../core/user/user.service';

@Component({
  selector: 'main-presence-container',
  imports: [MainPresenceIndicator, MatCard],
  templateUrl: './main-presence-container.html',
  styleUrl: './main-presence-container.scss',
})
export class MainPresenceContainer implements OnInit {
  private presence = inject(Presence);
  filter = input.required<string>();
  isGroup = input<string>("");
  teachers = signal<User[]>([]);

  ngOnInit(): void {
    this.presence.teacherUpdates.subscribe(() => {
      this.teachers.set(this.presence.connectedTeachers().filter((element: User) => {
        const searchString = this.isGroup() == "" ? "child:" + this.filter() : "group:" + this.filter();
        return element.room.includes(searchString);
      }));
    })
    this.teachers.set(this.presence.connectedTeachers().filter((element: User) => {
      const searchString = this.isGroup() == "" ? "child:" + this.filter() : "group:" + this.filter();
      return element.room.includes(searchString);
    }));
  }

}
