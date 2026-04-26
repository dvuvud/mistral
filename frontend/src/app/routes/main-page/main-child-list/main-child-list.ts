import { Component, model, signal, OnInit, inject, computed } from '@angular/core';
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

  searchedChildren = computed(() => {
    const sq = this.searchQuery();
    return this.children().filter(x => x.name.toLowerCase().includes(sq)); //TODO: ska gå att säka med små och stora bokstäver
  });

  private attendanceService = inject(AttendanceService);
  private childService = inject(ChildService);

  onSearchUpdated(sq: string) {
    this.searchQuery.set(sq);
  }

  get dateStr() {
    return new Date().toISOString().split('T')[0];
  }

  get isChecked(): boolean {
    return this.attendanceService.getSignal(this.childSignal().id, this.dateStr)() ?? false;
  }

  ngOnInit() {
    this.loadChildren();
  }

  onSelectChild(child: Child) {
    this.childSignal.set(child);
  }

  loadChildren() {
    this.childService.getChildren().subscribe({
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
