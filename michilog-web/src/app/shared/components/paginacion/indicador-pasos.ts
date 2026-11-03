import { Component, computed, input } from '@angular/core';

/** Puntos de progreso: el paso actual se alarga en una pastilla. `actual` empieza en 0. */
@Component({
  selector: 'app-indicador-pasos',
  templateUrl: './indicador-pasos.html',
})
export class IndicadorPasos {
  readonly total = input.required<number>();
  readonly actual = input.required<number>();

  protected readonly pasos = computed(() => Array.from({ length: this.total() }, (_, i) => i));
  protected readonly etiqueta = computed(() => `Paso ${this.actual() + 1} de ${this.total()}`);
}
