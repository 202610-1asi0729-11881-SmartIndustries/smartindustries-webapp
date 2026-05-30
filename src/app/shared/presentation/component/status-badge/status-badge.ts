import { Component, input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.css',
})
export class StatusBadge {
  status = input.required<string>();
  color = input<'green' | 'red' | 'yellow' | 'gray'>('gray');
}
