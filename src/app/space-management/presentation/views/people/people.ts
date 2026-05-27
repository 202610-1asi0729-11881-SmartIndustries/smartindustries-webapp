import { Component } from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';

@Component({
  selector: 'app-people',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatIconButton,
    SearchBar
  ],
  templateUrl: './people.html',
  styleUrl: './people.css',
})
export class People {}
