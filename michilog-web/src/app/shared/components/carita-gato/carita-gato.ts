import { Component, computed, input } from '@angular/core';
import { ColorGato, PELAJE } from './pelaje';

@Component({
  selector: 'app-carita-gato',
  templateUrl: './carita-gato.html',
})
export class CaritaGato {
  readonly color = input.required<ColorGato>();
 
  protected readonly pelaje = computed(() => PELAJE[this.color()]);
}