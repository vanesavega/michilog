import { Routes } from '@angular/router';
import { BienvenidaLayout } from './layout/bienvenida-layout/bienvenida-layout';
import { conCantidadGuard } from './guards/cantidad.guard';

export const BIENVENIDA_ROUTES: Routes = [
  {
    path: '',
    component: BienvenidaLayout,
    children: [
      { path: '', loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio) },
      { path: 'cuantos', loadComponent: () => import('./pages/cuantos/cuantos').then(m => m.Cuantos) },
      { path: 'cantidad', loadComponent: () => import('./pages/cantidad/cantidad').then(m => m.Cantidad) },
      { path: 'uno', loadComponent: () => import('./pages/form-uno/form-uno').then(m => m.FormUno) },
      { path: 'varios', canActivate: [conCantidadGuard], loadComponent: () => import('./pages/form-varios/form-varios').then(m => m.FormVarios) },
    ],
  },
];