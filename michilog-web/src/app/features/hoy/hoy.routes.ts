import { Routes } from '@angular/router';

export const HOY_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/hoy/hoy').then(m => m.Hoy) },
];
