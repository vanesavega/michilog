import { Component, computed, signal } from '@angular/core';
import { COLORES_GATO } from '../../../../shared/carita-gato/pelaje';
import { CaritaGato } from '../../../../shared/carita-gato/carita-gato';
import { RouterLink } from '@angular/router';

const MINIMO = 2;
const MAXIMO = 10;

@Component({
  imports: [ CaritaGato, RouterLink ],
  selector: 'app-cantidad',
  templateUrl: './cantidad.html',
})
export class Cantidad {
  protected readonly cantidad = signal(MINIMO);

  protected readonly caritas = computed(() => 
    Array.from({ length: this.cantidad()}, (_, i) => COLORES_GATO[i % COLORES_GATO.length])
  )

  menos() : void {
    this.cantidad.update(n => Math.max(MINIMO, n - 1));
  }
  
  mas() : void {
    this.cantidad.update(n => Math.min(MAXIMO, n + 1));
  }
}
