import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AccessStore } from '../../../application/access.store';

@Component({
  selector: 'app-create-access-group-form',
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
  ],
  templateUrl: './create-access-group-form.html',
  styleUrl: './create-access-group-form.css',
})
export class CreateAccessGroupForm {
  protected readonly store = inject(AccessStore);
  protected readonly dialogRef = inject(MatDialogRef<CreateAccessGroupForm>);

  protected name = '';
  protected description = '';

  protected submit(): void {
    if (this.name) {
      this.store.createAccessGroup(this.name, this.description);
      this.dialogRef.close();
    }
  }
}