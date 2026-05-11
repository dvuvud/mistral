import { Component, inject, model, OnInit } from '@angular/core';
import { UserService } from '../../../core/user/user.service';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'account-page',
  imports: [AsyncPipe, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './account-page.html',
  styleUrl: './account-page.scss',
})
export class AccountPage implements OnInit {
  private _snackBar = inject(MatSnackBar);
  private userService = inject(UserService);
  teacherColor = model<string>("#ffffff");
  userDataObservable = this.userService.getUser(Number(sessionStorage.getItem('UserId')));
  currentUser = this.userDataObservable.pipe();

  ngOnInit() {
    this.userDataObservable.subscribe((next) => {
      this.teacherColor.set(next.color);
    })
  }

  updateColor() {
    console.log("From updatecolor", this.teacherColor());
    const res = this.userService.updateColor(this.teacherColor());
    res.subscribe(() => {
      this._snackBar.open("Din färg uppdateras nästa gång du loggar in.", "Stäng", {
        duration: 2500,
        verticalPosition: "top"
      });
    })
  }
}
