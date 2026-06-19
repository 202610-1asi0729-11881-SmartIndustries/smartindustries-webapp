import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {AccessGroupsTable} from '../../components/rules-table/access-groups-table';
import {CreateAccessGroupForm} from '../../components/create-access-group-form/create-access-group-form';
import {AccessStore} from '../../../application/access.store';

@Component({
  selector: 'app-access-groups',
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    MatIconButton,
    AccessGroupsTable,
  ],
  templateUrl: './access-groups.html',
  styleUrl: './access-groups.css',
})
export class AccessGroups {
  protected readonly dialog = inject(MatDialog);
  protected readonly store = inject(AccessStore);

  protected siteOptions: string[] = ['all','North campus', 'East campus', 'West campus'];
  protected statusOptions: string[] = ['Active', 'Disabled'];

  protected openCreateRuleForm() {
    this.dialog.open(CreateAccessGroupForm);
  }
}
