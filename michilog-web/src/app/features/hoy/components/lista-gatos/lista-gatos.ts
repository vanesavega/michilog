import { Component, input, output } from '@angular/core';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { Gato } from '../../../../shared/models/gato.model';
import { fondoPastel } from '../../../../shared/utils/fondo-pastel';

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
