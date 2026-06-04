import {Routes} from '@angular/router';

const dashBoard = () => import('./views/dashboard/dashboard')
  .then(m => m.Dashboard);
const people = () => import('./views/people/people')
  .then(m => m.People);
const devices = () => import('./views/devices/devices')
  .then(m => m.Devices);
const sites = () => import('./views/sites/sites')
  .then(m => m.Sites);

const spaceManagementRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'people', loadComponent: people},
  { path: 'dashboard', loadComponent: dashBoard },
  { path: 'devices', loadComponent: devices },
  { path: 'sites', loadComponent: sites },
]

export default spaceManagementRoutes;
