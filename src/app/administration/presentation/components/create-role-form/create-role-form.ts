import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { AdministrationStore } from '../../../application/administration.store';

@Component({
  selector: 'app-create-role-form',
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
    MatCheckbox,
  ],
  templateUrl: './create-role-form.html',
  styleUrl: './create-role-form.css',
})
export class CreateRoleForm {
  protected readonly store = inject(AdministrationStore);
  protected readonly dialogRef = inject(MatDialogRef<CreateRoleForm>);

  protected name = '';
  protected canCreateSites = false;
  protected canCreatePeople = false;
  protected canConnectDevices = false;

  protected submit(): void {
    if (this.name) {
      this.store.createRole(this.name, this.canCreateSites, this.canCreatePeople, this.canConnectDevices);
      this.dialogRef.close();
    }
  }
}