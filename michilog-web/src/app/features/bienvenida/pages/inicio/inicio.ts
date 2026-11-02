import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaritaGato } from '../../../../shared/carita-gato/carita-gato';
import { Logo } from '../../../../shared/logo/logo';

@Component({
  imports: [RouterLink, CaritaGato, Logo],
  selector: 'app-inicio',
  templateUrl: './inicio.html',
})
export class Inicio {}
