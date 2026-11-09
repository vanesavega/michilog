import { Component, computed, input, output } from '@angular/core';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { Gato } from '../../../../shared/models/gato.model';
import { fondoPastel } from '../../../../shared/utils/fondo-pastel';
import { ListaGatos } from '../lista-gatos/lista-gatos';

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
