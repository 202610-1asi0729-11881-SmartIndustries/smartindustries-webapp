import { Component } from '@angular/core';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavContainer,
  MatSidenavContent
} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-operations-layout',
  imports: [
    MatIcon,
    MatButton,
    RouterLinkActive,
    RouterLink,
    MatDrawerContent,
    MatDrawerContainer,
    MatDrawer
  ],
  templateUrl: './operations-layout.html',
  styleUrl: './operations-layout.css',
})
export class OperationsLayout {
  protected items = [
    { label: "Dashboard", icon: "dashboard", route: ""},
    { label: "People", icon: "accessibility_new", route: ""},
    { label: "Devices", icon: "door_back", route: ""},
    { label: "Rules", icon: "gavel", route: ""},
    { label: "Audit", icon: "search_activity", route: ""},
    { label: "Guests", icon: "shield_person", route: ""}
  ];
}
