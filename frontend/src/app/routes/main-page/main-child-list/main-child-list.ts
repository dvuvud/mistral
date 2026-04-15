import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

import { child, MockChildList } from '../../../models/TestChildren'; // TESTDATA

@Component({
  selector: 'main-child-list',
  imports: [MatListModule, RouterModule],
  templateUrl: './main-child-list.html',
  styleUrl: './main-child-list.scss',
})

export class ChildList {
    children = signal(MockChildList);  //TESTDATA FÖR VISUELL GUIDE

    onSelectChild(child: child) {
      console.log(child.name);
    }
}
