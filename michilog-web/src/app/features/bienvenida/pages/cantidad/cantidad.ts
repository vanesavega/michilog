import { Component, computed, inject, signal } from '@angular/core';
import { COLORES_GATO } from '../../../../shared/components/carita-gato/pelaje';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { Router, RouterLink } from '@angular/router';
import { BienvenidaStore } from '../../bienvenida.store';

const MINIMO = 2;
const MAXIMO = 10;

@Component({
  imports: [ CaritaGato, RouterLink ],
  selector: 'app-cantidad',
  templateUrl: './cantidad.html',
})
export class Cantidad {
  private readonly store = inject(BienvenidaStore);
  private readonly router = inject(Router);

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

  protected continuar(): void {
    this.store.elegirCantidad(this.cantidad());
    this.router.navigate(['/bienvenida/varios']);
  }
}
