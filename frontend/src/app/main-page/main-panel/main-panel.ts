import { Component } from '@angular/core';
import { ChildList } from './child-list/child-list';

@Component({
  selector: 'app-main-panel',
  imports: [ChildList],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss',
})
export class MainPanel {

}
