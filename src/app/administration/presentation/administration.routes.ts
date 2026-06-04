import {Routes} from '@angular/router';

const roles = () => import('./views/roles/roles')
  .then(m => m.Roles);
const administrators = () => import('../../administration/presentation/views/administrators/administrators')
  .then(m => m.Administrators);

const administrationRoutes: Routes = [
  { path: 'roles', loadComponent: roles},
  { path: 'administrators', loadComponent: administrators },
]

export default administrationRoutes;
