import { C } from '@angular/cdk/keycodes';
import { Component, model } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { child } from '../../../models/TestChildren';

@Component({
  selector: 'app-attendance-box',
  imports: [MatCheckboxModule],
  templateUrl: './attendance-box.html',
  styleUrl: './attendance-box.scss',
})
export class AttendanceBox {
    childSignal = model.required<child>();
    isChecked = false;
    errorMessage = '';

    constructor() {
      effect(() => {
        const currentChild = this.childSignal(); 

        this.isChecked = this.childSignal().attendance; //TODO: current child lol
        this.errorMessage = ''; 
      });
    }


    onCheckBox(event: MatCheckboxChange) {
          if (event.checked) {
              
            const isValid = false; //TODO: byt ut mot check in logik

            if(isValid) {
              this.isChecked = true; 
            } else {
              event.source.checked = false;
              this.isChecked = false;
              this.errorMessage = 'Misslyckades! Detta barn är redan registrerad som närvarande.'     
              
              setTimeout(() => {
                this.errorMessage = '';
              }, 50)
            }

          }
      }
}
