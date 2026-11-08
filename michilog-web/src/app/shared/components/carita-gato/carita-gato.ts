import { Component, computed, input } from '@angular/core';
import { Apariencia } from '../../models/apariencia.model';

@Component({
  selector: 'app-carita-gato',
  templateUrl: './carita-gato.html',
})
export class CaritaGato {
  readonly apariencia = input.required<Apariencia>();
  protected readonly contorno = computed(
    () => `color-mix(in srgb, ${this.apariencia().pelaje} 55%, black)`,
  );
}
