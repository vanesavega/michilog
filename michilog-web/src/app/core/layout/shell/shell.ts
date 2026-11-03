import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BotonTema } from '../../tema/boton-tema/boton-tema'
import { Logo } from '../../../shared/components/logo/logo'

interface Enlace {
  ruta: string;
  texto: string;
  icono: string;
}

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, BotonTema, Logo],
  selector: 'app-shell',
  templateUrl: './shell.html',
})

export class Shell {
  protected readonly enlaces: Enlace[] = [
    { ruta: '/hoy', texto: 'Hoy', icono: 'home' },
    { ruta: '/gatos', texto: 'Gatos', icono: 'pets' },
  ];
}
