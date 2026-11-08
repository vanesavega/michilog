import { Routes } from '@angular/router';
import { conGatosGuard, sinGatosGuard } from './features/gatos/guards/gatos.guards';
import { Shell } from './core/layout/shell/shell';

export const routes: Routes = [
  {
    path: 'bienvenida',
    canActivate: [sinGatosGuard],
    loadChildren: () => import('./features/bienvenida/bienvenida.routes').then((m) => m.BIENVENIDA_ROUTES),
  },
  {
    path: '',
    component: Shell,
    canActivate: [conGatosGuard],
    children: [
      { path: '', redirectTo: 'hoy', pathMatch: 'full' },
      { path: 'hoy', loadChildren: () => import('./features/hoy/hoy.routes').then((m) => m.HOY_ROUTES) },
      { path: 'gatos', loadChildren: () => import('./features/gatos/gatos.routes').then((m) => m.GATOS_ROUTES) }
    ]
  },
  { path: '**', redirectTo: '' }
];