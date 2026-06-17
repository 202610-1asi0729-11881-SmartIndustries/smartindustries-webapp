import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { SpaceManagementStore } from '../../../application/space-management.store';

@Component({
  selector: 'app-create-person-form',
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
  templateUrl: './create-person-form.html',
  styleUrl: './create-person-form.css',
})
export class CreatePersonForm {
  protected readonly store = inject(SpaceManagementStore);
  protected readonly dialogRef = inject(MatDialogRef<CreatePersonForm>);

  protected firstName = '';
  protected lastName = '';
  protected identityDocument = '';

  protected submit(): void {
    if (this.firstName && this.lastName && this.identityDocument) {
      this.store.createPerson(this.firstName, this.lastName, this.identityDocument);
      this.dialogRef.close();
    }
  }
}