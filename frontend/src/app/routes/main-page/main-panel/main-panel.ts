import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ChildList } from '../main-child-list/main-child-list';

/*
import { ChildList } from '../main-child-list/main-child-list';
*/

@Component({
  selector: 'main-panel',
  imports: [MatCard, ChildList],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
export class MainPanel {

}
