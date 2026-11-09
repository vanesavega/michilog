import { Component, input, output } from '@angular/core';
import { CaritaGato } from '../carita-gato/carita-gato';
import { Gato } from '../../models/gato.model';
import { fondoPastel } from '../../utils/fondo-pastel';

@Component({
  imports: [CaritaGato],
  selector: 'app-lista-gatos',
  templateUrl: './lista-gatos.html',
})
export class ListaGatos {
  readonly gatos = input.required<Gato[]>();
  readonly seleccionadoId = input<string | null>(null);
  readonly seleccionar = output<string>();

  protected fondo(gato: Gato): string {
    return fondoPastel(gato.id);
  }
}
