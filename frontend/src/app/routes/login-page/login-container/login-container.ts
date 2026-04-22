import { Component, EventEmitter, model, Output, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'login-container',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatTabGroup, MatTab],
  templateUrl: './login-container.html',
  styleUrl: './login-container.scss',
})
export class LoginContainer {
  /*
  Model är en speciell typ av input som tillåter 2-way-binding.
  Det innebär alltså att föräldern kan skicka en signal till barnet,
  och värdet på signalen propageras tillbaka till föräldern när barnet ändrar det.
  */
  email = model.required<string>();
  password = model.required<string>();
  name = model.required<string>();
  lastName = model.required<string>();
  errorMessage = model.required<string>();
  successMessage = model.required<string>();

  /*
  Detta är lite data för password-fältet
  */
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  clearError() {
    this.errorMessage.set('');
    this.successMessage.set('');
  }

  /*
  Här definierar vi ett event som vi vill att föräldern ska kunna ta emot.
  */
  @Output() loginSubmitEvent = new EventEmitter();
  submitLogin() {
    this.loginSubmitEvent.emit();
  }

  @Output() registerSubmitEvent = new EventEmitter();
  submitRegister() {
    this.registerSubmitEvent.emit();
  }
}
