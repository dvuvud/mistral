<<<<<<< HEAD
import { Component, inject } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> d823078 (La till basic bekräftelseruta, den är inte stylad än. Stor commit förlåt David <3)
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'confirmation-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
})
export class ConfirmationDialog {
  
<<<<<<< HEAD
  private dialogRef = inject(MatDialogRef<ConfirmationDialog>);

=======
  constructor(private dialogRef: MatDialogRef<ConfirmationDialog>) {}
>>>>>>> d823078 (La till basic bekräftelseruta, den är inte stylad än. Stor commit förlåt David <3)

  onConfirm() {
    this.dialogRef.close(true);
  }

  onDeny() {
    this.dialogRef.close(false);
  }
}
