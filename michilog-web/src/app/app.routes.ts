import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'hoy', pathMatch: 'full' },
  {
    path: 'hoy',
    loadChildren: () => import('./features/registros/registros.routes').then(m => m.REGISTROS_ROUTES),
  },
  {
    path: 'gatos',
    loadChildren: () => import('./features/gatos/gatos.routes').then(m => m.GATOS_ROUTES),
  },
];