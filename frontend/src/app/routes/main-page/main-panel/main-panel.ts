import { Component } from '@angular/core';
import { ChildList } from '../main-child-list/main-child-list';

@Component({
  selector: 'main-panel',
  imports: [ChildList],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
export class MainPanel {

}
