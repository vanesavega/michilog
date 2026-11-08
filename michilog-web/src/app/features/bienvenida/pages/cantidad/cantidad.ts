import { Component, computed, inject, signal } from '@angular/core';
import { COLORES_PELAJE } from '../../../../shared/components/carita-gato/paletas';
import { Apariencia, OJOS_POR_DEFECTO } from '../../../../shared/models/apariencia.model';
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
    Array.from({ length: this.cantidad()}, (_, i): Apariencia => ({ pelaje: COLORES_PELAJE[i % COLORES_PELAJE.length], ojos: OJOS_POR_DEFECTO }))
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
