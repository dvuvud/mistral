import {ChangeDetectionStrategy, Component, EventEmitter, input, model, Output, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-container',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-container.html',
  styleUrl: './login-container.scss',
})
export class LoginContainer {
  email = model.required<string>();
  password = model.required<string>();
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  @Output() loginSubmitEvent = new EventEmitter();
  submitLogin() {
    this.loginSubmitEvent.emit();
  }
}
