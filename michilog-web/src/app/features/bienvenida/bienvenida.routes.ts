import { Routes } from '@angular/router';

export const BIENVENIDA_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio) },
  { path: 'cuantos', loadComponent: () => import('./pages/cuantos/cuantos').then(m => m.Cuantos) },
  { path: 'cantidad', loadComponent: () => import('./pages/cantidad/cantidad').then(m => m.Cantidad) },
  { path: 'uno', loadComponent: () => import('./pages/form-uno/form-uno').then(m => m.FormUno) },
  { path: 'varios/:cantidad', loadComponent: () => import('./pages/form-varios/form-varios').then(m => m.FormVarios) },
];