import { Component, model, signal, OnInit, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { Child, ChildService } from '../../../core/child/child.service';
import { AttendanceBox } from '../attendance-box/attendance-box';
import { MatCheckbox } from '@angular/material/checkbox';
import { AttendanceService } from '../../../core/child/attendance.service';

@Component({
  selector: 'main-child-list',
  imports: [MatListModule, RouterModule, MatDividerModule, AttendanceBox, MatCheckbox],
  templateUrl: './main-child-list.html',
  styleUrl: './main-child-list.scss',
})


export class ChildList implements OnInit {
  children = signal<Child[]>([]);
  childSignal = model.required<Child>();

  private attendanceService = inject(AttendanceService);
  private childService = inject(ChildService);

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
    this.childSignal.set(child); //TODO: SKA VARA DATA STRUKTUREN
  }

  loadChildren() {
    this.childService.getChildren().subscribe({
      next: (data) => {
        this.children.set(data);
        console.log('children:', this.children);
      }
    });
  }
}
