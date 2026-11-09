import { Routes } from '@angular/router';

export const DIARIO_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/diario/diario').then(m => m.Diario) },
];
