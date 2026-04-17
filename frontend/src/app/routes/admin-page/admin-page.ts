import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'admin-page',
  imports: [MatCard, MatCardHeader, MatCardContent],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage {

}
