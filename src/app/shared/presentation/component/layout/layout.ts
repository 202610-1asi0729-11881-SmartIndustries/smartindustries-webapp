import { Component } from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
