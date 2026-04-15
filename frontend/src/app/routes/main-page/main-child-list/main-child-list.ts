import { Component, model, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

import { child, MockChildList } from '../../../models/TestChildren'; // TESTDATA

@Component({
  selector: 'main-child-list',
  imports: [MatListModule, RouterModule, MatDividerModule],
  templateUrl: './main-child-list.html',
  styleUrl: './main-child-list.scss',
})

export class ChildList {
    children = signal(MockChildList);  //TODO: fetcha riktiga datan
    childSignal = model.required<child>();

    onSelectChild(child: child) {
      this.childSignal.set(child); //TODO: SKA VARA DATA STRUKTUREN
    }
}
