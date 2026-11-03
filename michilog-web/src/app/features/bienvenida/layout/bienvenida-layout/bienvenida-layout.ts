import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo } from '../../../../shared/components/logo/logo';
import { BotonTema } from '../../../../core/tema/boton-tema/boton-tema';

@Component({
  imports: [RouterOutlet, Logo, BotonTema],
  selector: 'app-bienvenida-layout',
  templateUrl: './bienvenida-layout.html',
})
export class BienvenidaLayout {}