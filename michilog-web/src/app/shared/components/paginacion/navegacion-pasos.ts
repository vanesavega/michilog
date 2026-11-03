import { Component, computed, input, output } from '@angular/core';
import { IndicadorPasos } from './indicador-pasos';

/**
 * Pie de un formulario por pasos: error, puntos de progreso y botones.
 * Es presentacional: no valida nada. El padre decide cuándo hay error y qué texto lleva.
 * El botón de la última página es `submit`, así que dispara el `(ngSubmit)` del formulario padre.
 */
@Component({
  selector: 'app-navegacion-pasos',
  imports: [IndicadorPasos],
  templateUrl: './navegacion-pasos.html',
})
export class NavegacionPasos {
  /** Total de pasos. `actual` empieza en 0. */
  readonly total = input.required<number>();
  readonly actual = input.required<number>();
  /** Texto de error ya escrito por el padre; null si no hay. */
  readonly error = input<string | null>(null);
  readonly textoFinal = input('Guardar y empezar');

  readonly anterior = output<void>();
  readonly siguiente = output<void>();

  protected readonly esPrimera = computed(() => this.actual() === 0);
  protected readonly esUltima = computed(() => this.actual() === this.total() - 1);
}
