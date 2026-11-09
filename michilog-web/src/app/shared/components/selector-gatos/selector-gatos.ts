import { Component, computed, input, output } from '@angular/core';
import { CaritaGato } from '../carita-gato/carita-gato';
import { Gato } from '../../models/gato.model';
import { fondoPastel } from '../../utils/fondo-pastel';
import { ListaGatos } from '../lista-gatos/lista-gatos';

/** Desde esta cantidad de gatos la fila deslizable pasa a ser un desplegable. */
export const MAX_GATOS_EN_FILA = 8;

@Component({
  imports: [CaritaGato, ListaGatos],
  selector: 'app-selector-gatos',
  templateUrl: './selector-gatos.html',
})
export class SelectorGatos {
  readonly gatos = input.required<Gato[]>();
  readonly seleccionadoId = input<string | null>(null);
  readonly desplegable = input(false);
  readonly vertical = input(false);
  readonly seleccionar = output<string>();

  protected readonly seleccionado = computed(() => this.gatos().find(g => g.id === this.seleccionadoId()) ?? null);

  protected fondo(gato: Gato): string {
    return fondoPastel(gato.id);
  }
}
