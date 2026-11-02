import { Component, inject } from '@angular/core';
import { TemaService } from '../tema-service'

@Component({
  imports: [],
  selector: 'app-boton-tema',
  templateUrl: './boton-tema.html',
})
export class BotonTema {
  protected readonly tema = inject(TemaService);
}
