import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { Logo } from '../../../../shared/components/logo/logo';
import { Apariencia, OJOS_POR_DEFECTO } from '../../../../shared/models/apariencia.model';

@Component({
  imports: [RouterLink, CaritaGato, Logo],
  selector: 'app-inicio',
  templateUrl: './inicio.html',
})
export class Inicio {
  protected readonly apariencia: Apariencia = { pelaje: '#f0d9a9', ojos: OJOS_POR_DEFECTO };
}
