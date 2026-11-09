import { Component, computed, inject } from '@angular/core';
import { MAX_GATOS_EN_FILA, SelectorGatos } from '../../../../shared/components/selector-gatos/selector-gatos';
import { GatosStore } from '../../../../shared/stores/gatos.store';
import { RegistrosStore } from '../../../../shared/stores/registros.store';
import { agruparPorDia } from '../../../../shared/utils/agrupar-por-dia';
import { DiaRegistros } from '../../components/dia-registros/dia-registros';

@Component({
  imports: [SelectorGatos, DiaRegistros],
  selector: 'app-diario',
  templateUrl: './diario.html',
})
export class Diario {
  protected readonly gatosStore = inject(GatosStore);
  private readonly registrosStore = inject(RegistrosStore);

  protected readonly variosGatos = computed(() => this.gatosStore.total() > 1);
  protected readonly muchosGatos = computed(() => this.gatosStore.total() > MAX_GATOS_EN_FILA);

  /** Registros del gato elegido, agrupados por día. */
  protected readonly grupos = computed(() => {
    const gato = this.gatosStore.seleccionado();
    return agruparPorDia(this.registrosStore.registros().filter((r) => r.gatoId === gato?.id));
  });
}
