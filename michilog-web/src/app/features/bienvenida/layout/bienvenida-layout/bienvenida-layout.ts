import { Component } from '@angular/core';
import { CaritaGato } from '../../../../shared/carita-gato/carita-gato';
import { RouterOutlet } from '@angular/router';
import { Logo } from '../../../../shared/logo/logo';

@Component({
  imports: [ CaritaGato, RouterOutlet, Logo],
  selector: 'app-bienvenida-layout',
  templateUrl: './bienvenida-layout.html',
})
export class BienvenidaLayout {}
