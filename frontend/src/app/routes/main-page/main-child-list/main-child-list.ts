import { Component, model, signal, inject, computed, effect } from '@angular/core';
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
import { localDateToday } from '../../../core/utils/date-utils';
import { groupResponse } from '../../../core/groups/group.service';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MainPresenceContainer } from '../main-presence-container/main-presence-container';

@Component({
  selector: 'main-child-list',
  imports: [MatListModule, RouterModule, MatDividerModule, AttendanceBox, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatSelectModule, MainPresenceContainer],
  templateUrl: './main-child-list.html',
  styleUrl: './main-child-list.scss',
})


export class ChildList {

  children = signal<Child[]>([]);
  childSignal = model.required<Child>();
  searchQuery = signal<string>('');
  groupSignal = model.required<groupResponse>();
  contentSignal = model.required<string>();
  allGroups = model.required<groupResponse[]>();
  stupidFix = signal<number>(0);


  searchedChildren = computed(() => {
    this.stupidFix();
    const sq = this.searchQuery();
    return this.children().filter(x => x.name.toLowerCase().includes(sq));
  });

  groupAttendance = computed(() => {
    return this.searchedChildren().filter(x => x.status === 'CHECKED_IN').length;
  })

  groupAbsent = computed(() => {
    return this.searchedChildren().length - this.groupAttendance();
  })

  private attendanceService = inject(AttendanceService);

  private childService = inject(ChildService);

  constructor() {
    this.attendanceService.getAttendanceChanges.subscribe((next) => {
      const targetChild: Child | undefined = this.children().find((child: Child) => {
        return child.id === next.childId;
      });
      if (targetChild == null) {
        return;
      }
      targetChild.status = next.status;
      this.stupidFix.update((x) => x + 1);
    });

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

  onSelectChild(child: Child) {
    this.childSignal.set(child);
    this.contentSignal.set('childView');
  }

  loadChildren() {
    this.childService.getChildrenByGroup(this.groupSignal().id).subscribe({
      next: (data) => {
        this.children.set(data);
      }
    });
  }

  showAllChildren() {
    this.childService.getChildren().subscribe({
      next: (data) => {
        this.children.set(data);
      }
    });
  }

  handleSelection(value: groupResponse) {
    console.log(value);
    if(value.name === 'alla') {
      this.contentSignal.set('homeView');
      this.showAllChildren();
      return;
    }

    this.groupSignal.set(value);
    this.contentSignal.set('groupView');
  }

  handleWebsocketMessage(message: WsAttendanceMessage) {
    const targetChild: Child | undefined = this.children().find((child: Child) => {
      return child.id === message.childId;
    });
    if (!targetChild) {
      console.error("Attendance message received from other group. Child not found.");
      return;
    }
    const sig = this.attendanceService.getSignal(targetChild.id, localDateToday());
    sig.set(message.status);
    targetChild.status = message.status;
    this.stupidFix.update((x) => x + 1);
  }
}
