import { Component, model, signal, OnInit, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { Child, ChildService } from '../../../core/child/child.service';
import { AttendanceBox } from '../attendance-box/attendance-box';

@Component({
  selector: 'app-main-child-list',
  imports: [MatListModule, RouterModule, MatDividerModule, AttendanceBox],
  templateUrl: './main-child-list.html',
  styleUrl: './main-child-list.scss',
})


export class ChildList implements OnInit {
  children = signal<Child[]>([]);
  childSignal = model.required<Child>();

  private childService = inject(ChildService);

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
