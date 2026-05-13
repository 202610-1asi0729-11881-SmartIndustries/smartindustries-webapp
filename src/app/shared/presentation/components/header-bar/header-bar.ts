import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-header-bar',
  imports: [MatToolbar, MatIcon, MatButton, MatIconButton],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.css',
})
export class HeaderBar {}
