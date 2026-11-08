import { Component, inject, signal } from '@angular/core';
import { Apariencia, OJOS_POR_DEFECTO } from '../../../../shared/models/apariencia.model';
import { Router, RouterLink } from '@angular/router';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';

type Eleccion = 'uno' | 'varios';
interface Opcion {
  valor: Eleccion;
  titulo: string;
  descripcion: string;
  caritas: Apariencia[];
}

@Component({
  imports: [ CaritaGato, RouterLink ],
  selector: 'app-cuantos',
  templateUrl: './cuantos.html',
})
export class Cuantos {
  private readonly router = inject(Router);
  protected readonly eleccion = signal<Eleccion | null>(null);
  protected readonly opciones: Opcion[] = [
    { valor: 'uno', titulo: 'Solo Uno', descripcion: 'su perfil en grande, con todo a la mano', caritas: [{ pelaje: '#e8913a', ojos: OJOS_POR_DEFECTO }] },
    { valor: 'varios', titulo: 'Varios', descripcion: 'Todos juntos, para elegir a quien registrarse', caritas: [{ pelaje: '#9a9ca3', ojos: OJOS_POR_DEFECTO }, { pelaje: '#f0d9a9', ojos: '#8fbf6a' }] },
  ];
  
  protected continuar() : void{
    const destino = this.eleccion() === 'uno' ? 'uno' : 'cantidad';
    this.router.navigate(['/bienvenida', destino]);
  }
}
