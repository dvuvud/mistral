import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'delete-confirmation-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-confirmation-dialog.html',
  styleUrl: './delete-confirmation-dialog.scss',
})
export class DeleteConfirmationDialog {
  private dialogRef = inject(MatDialogRef<DeleteConfirmationDialog>);

  onConfirm() {
    this.dialogRef.close(true);
  }

  onDeny() {
    this.dialogRef.close(false);
  }

}
