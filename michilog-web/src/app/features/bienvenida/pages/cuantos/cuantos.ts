import { Component, inject, signal } from '@angular/core';
import { ColorGato } from '../../../../shared/components/carita-gato/pelaje';
import { Router, RouterLink } from '@angular/router';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';

type Eleccion = 'uno' | 'varios';
interface Opcion {
  valor: Eleccion;
  titulo: string;
  descripcion: string;
  caritas: ColorGato[];
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
    { valor: 'uno', titulo: 'Solo Uno', descripcion: 'su perfil en grande, con todo a la mano', caritas: ['durazno'] },
    { valor: 'varios', titulo: 'Varios', descripcion: 'Todos juntos, para elegir a quien registrarse', caritas: ['lavanda', 'menta'] },
  ];
  
  protected continuar() : void{
    const destino = this.eleccion() === 'uno' ? 'uno' : 'cantidad';
    this.router.navigate(['/bienvenida', destino]);
  }
}
