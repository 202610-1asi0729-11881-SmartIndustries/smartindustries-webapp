import { Component } from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-people',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatIconButton,
    SearchBar,
    MatOption,
    MatSelect
  ],
  templateUrl: './people.html',
  styleUrl: './people.css',
})
export class People {
  protected statusOptions = ["Active", "Inactive", "Identification lost"];
  protected siteOptions = ["Off-site", "North Campus", "East Convention Center"]
}
