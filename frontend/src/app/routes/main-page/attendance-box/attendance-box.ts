import { C } from '@angular/cdk/keycodes';
import { Component, model } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { Child } from '../../../core/child/child.service';
import { AttendanceService, AttendanceGetInfo } from '../../../core/child/attendance.service';

@Component({
  selector: 'app-attendance-box',
  imports: [MatCheckboxModule],
  templateUrl: './attendance-box.html',
  styleUrl: './attendance-box.scss',
})
export class AttendanceBox {
    childSignal = model.required<Child>();
    isChecked = false;
    errorMessage = '';

    constructor(private attendanceService: AttendanceService) {
      effect(() => {
        this.isChecked = this.getAttendance();
        this.errorMessage = ''; 
      });
    }


    onCheckBox(event: MatCheckboxChange) {
      if (event.checked) {     
        const isValid = true; //TODO: byt ut mot registreringscheck

            if(isValid) {
              this.isChecked = this.setAttendance(); 
            } else {
              event.source.checked = false;
              this.isChecked = false;
              this.errorMessage = 'Misslyckades! Detta barn är redan registrerad som närvarande.'     
              
              setTimeout(() => {
                this.errorMessage = '';
              }, 50)
            }

          } else {
            this.isChecked = this.setAttendance();
          }
    }

    getAttendance(): boolean {
      this.attendanceService.getAttendance(new Date().toISOString().split('T')[0]).subscribe({
      next: (data) => {
        for (let child of data.list) {
          if (child.childId == this.childSignal().id) {
            return child.present
          }
        }
        return false;
      }})
      return false;
    }

    setAttendance(): boolean {
      this.attendanceService.setAttendance(this.childSignal().id, new Date().toISOString().split('T')[0], this.isChecked).subscribe({
      next: (data) => {
        console.log(data)
        return data.present
      }})
      return false;
    }
}
