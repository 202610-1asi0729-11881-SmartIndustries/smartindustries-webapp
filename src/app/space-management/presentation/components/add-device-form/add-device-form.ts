import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { SpaceManagementStore } from '../../../application/space-management.store';

@Component({
  selector: 'app-add-device-form',
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
    MatOption,
    MatSelect,
  ],
  templateUrl: './add-device-form.html',
  styleUrl: './add-device-form.css',
})
export class AddDeviceForm {
  protected readonly store = inject(SpaceManagementStore);
  protected readonly dialogRef = inject(MatDialogRef<AddDeviceForm>);

  protected readonly modeOptions = ['Free', 'Blocked', 'Security'];

  protected name = '';
  protected selectedSiteId: number | null = null;
  protected selectedMode = '';

  protected submit(): void {
    if (this.name && this.selectedSiteId && this.selectedMode) {
      this.store.createDevice(this.selectedSiteId, this.name, this.selectedMode.toUpperCase());
      this.dialogRef.close();
    }
  }
}