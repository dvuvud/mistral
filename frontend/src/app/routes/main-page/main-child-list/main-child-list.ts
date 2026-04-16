import { Component, model, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { Child, ChildService } from '../../../core/child/child.service';

@Component({
  selector: 'main-child-list',
  imports: [MatListModule, RouterModule, MatDividerModule],
  templateUrl: './main-child-list.html',
  styleUrl: './main-child-list.scss',
})


export class ChildList {
    children = signal<Child[]>([]);  
    childSignal = model.required<Child>();

    constructor(private childService: ChildService) {}

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
