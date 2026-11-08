import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { Gato } from '../../../../shared/models/gato.model';
import { fondoPastel } from '../../../../shared/utils/fondo-pastel';

@Component({
  imports: [CaritaGato, NgTemplateOutlet],
  selector: 'app-selector-gatos',
  templateUrl: './selector-gatos.html',
})
export class SelectorGatos {
  readonly gatos = input.required<Gato[]>();
  readonly seleccionadoId = input<string | null>(null);
  /** El padre decide cuándo hay demasiados gatos para la fila y se usa el desplegable. */
  readonly desplegable = input(false);
  /** Lista vertical con todos los gatos a la vista (panel de web). */
  readonly vertical = input(false);
  readonly seleccionar = output<string>();

  protected readonly seleccionado = computed(() => this.gatos().find(g => g.id === this.seleccionadoId()) ?? null);

  protected fondo(gato: Gato): string {
    return fondoPastel(gato.id);
  }
}
