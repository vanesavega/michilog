import { Routes } from '@angular/router';
import { gatoExisteGuard, unSoloGatoGuard } from './guards/gatos.guards';

export const GATOS_ROUTES: Routes = [
  {
    path: '',
    canActivate: [unSoloGatoGuard],
    loadComponent: () => import('./pages/gatos-lista/gatos-lista').then(m => m.GatosLista),
  },
  {
    path: ':id',
    canActivate: [gatoExisteGuard],
    loadComponent: () => import('./pages/gato-perfil/gato-perfil').then(m => m.GatoPerfil),
  },
];
