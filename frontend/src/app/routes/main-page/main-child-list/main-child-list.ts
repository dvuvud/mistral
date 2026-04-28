import { Component, model, signal, OnInit, inject, computed, effect } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { Child, ChildService } from '../../../core/child/child.service';
import { AttendanceBox } from '../attendance-box/attendance-box';
import { AttendanceService } from '../../../core/child/attendance.service';
import { WsAttendanceMessage } from '../../../core/websocket/websocket.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { groupResponse } from '../../../core/groups/group.service';

@Component({
  selector: 'main-child-list',
  imports: [MatListModule, RouterModule, MatDividerModule, AttendanceBox, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './main-child-list.html',
  styleUrl: './main-child-list.scss',
})


export class ChildList implements OnInit {

  children = signal<Child[]>([]);
  childSignal = model.required<Child>();
  searchQuery = signal<string>('');
  groupSignal = model.required<groupResponse>();

  searchedChildren = computed(() => {
    const sq = this.searchQuery();
    return this.children().filter(x => x.name.toLowerCase().includes(sq)); 
  });

  private attendanceService = inject(AttendanceService);
  private childService = inject(ChildService);

  constructor() {
    effect(() => {
      const group = this.groupSignal();
      if (group.id !== 0) {
        this.loadChildren();
      }
    });
  }

  onSearchUpdated(sq: string) {
    console.log(this.groupSignal().name)
    this.searchQuery.set(sq);
  }

  get dateStr() {
    return new Date().toISOString().split('T')[0];
  }

  get isChecked(): boolean {
    return this.attendanceService.getSignal(this.childSignal().id, this.dateStr)() ?? false;
  }

  ngOnInit() {
  }

  onSelectChild(child: Child) {
    this.childSignal.set(child);
  }

  loadChildren() {
    this.childService.getChildrenByGroup(this.groupSignal().id).subscribe({
      next: (data) => {
        this.children.set(data);
      }
    });
  }

  handleWebsocketMessage(message: WsAttendanceMessage) {
    const targetChild: Child | undefined = this.children().find((child: Child) => {
      return child.id === message.childId;
    });

    if (!targetChild) {
      alert("Child not found");
      return;
    }

    const sig = this.attendanceService.getSignal(targetChild.id, this.dateStr);
    sig.set(message.present);
  }
}
