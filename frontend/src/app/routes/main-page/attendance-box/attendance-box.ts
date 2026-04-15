import { C } from '@angular/cdk/keycodes';
import { Component, model } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-attendance-box',
  imports: [MatCheckboxModule],
  templateUrl: './attendance-box.html',
  styleUrl: './attendance-box.scss',
})
export class AttendanceBox {
    childSignal = model.required<string>();
    isChecked = false;
    errorMessage = '';


    onCheckBox(event: MatCheckboxChange) {
          if (event.checked) {
              
            const isValid = false; //TODO: byt ut mot registreringscheck

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
