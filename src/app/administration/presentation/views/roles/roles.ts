import {Component} from '@angular/core';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-roles',
  imports: [
    SearchBar,
    TranslatePipe
  ],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {}
