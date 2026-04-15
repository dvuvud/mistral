import { Component, model } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-attendance-box',
  imports: [MatCheckboxModule],
  templateUrl: './attendance-box.html',
  styleUrl: './attendance-box.scss',
})
export class AttendanceBox {
    childSignal = model.required<string>();
}
