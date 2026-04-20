import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'confirmation-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
})
export class ConfirmationDialog {
  
  constructor(private dialogRef: MatDialogRef<ConfirmationDialog>) {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onDeny() {
    this.dialogRef.close(false);
  }
}
