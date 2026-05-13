import { Component } from '@angular/core';
import { HeaderBar } from '../header-bar/header-bar';

@Component({
  selector: 'app-layout',
  imports: [HeaderBar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
