import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {
  OrganizationCard
} from '../../../../space-management/presentation/components/organization-card/organization-card';
import {
  CreateOrganizationForm
} from '../../../../space-management/presentation/components/create-organization-form/create-organization-form';
import {TranslatePipe} from '@ngx-translate/core';
import {SpaceManagementStore} from '../../../../space-management/application/space-management.store';

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    MatButton,
    OrganizationCard,
    TranslatePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly dialog = inject(MatDialog);
  protected readonly store = inject(SpaceManagementStore);

  protected openCreateOrganizationForm() {
    this.dialog.open(CreateOrganizationForm);
  }
}
