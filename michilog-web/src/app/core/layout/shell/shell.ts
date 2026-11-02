import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BotonTema } from '../../tema/boton-tema/boton-tema'


interface Enlace {
  ruta: string;
  texto: string;
  icono: string;
}

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, BotonTema],
  selector: 'app-shell',
  templateUrl: './shell.html',
})

export class Shell {
  protected readonly enlaces: Enlace[] = [
    { ruta: '/hoy', texto: 'Hoy', icono: 'home' },
    { ruta: '/gatos', texto: 'Gatos', icono: 'pets' },
  ];
}
