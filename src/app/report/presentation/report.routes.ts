import {Routes} from '@angular/router';
const audit = () => import('./views/audit/audit')
  .then(m => m.Audit);
const alerts = () => import('./views/alerts/alerts')
  .then(m => m.Alerts);

const reportRoutes: Routes = [
  {path:'audit', loadComponent: audit},
  {path:'alerts', loadComponent: alerts},
]

export default reportRoutes;
