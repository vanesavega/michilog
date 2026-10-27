import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo:'hoy', pathMatch:'full'},
    {path: 'hoy', loadComponent: () => import('./features/registros/pages/hoy/hoy').then(m => m.Hoy)},
    {path: 'gatos', loadComponent: () => import('./features/gatos/pages/gatos-lista/gatos-lista').then(m => m.GatosLista)}
];
