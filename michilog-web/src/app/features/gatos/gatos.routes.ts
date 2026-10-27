import { Routes } from '@angular/router';

export const GATOS_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/gatos-lista/gatos-lista').then(m => m.GatosLista) },
];