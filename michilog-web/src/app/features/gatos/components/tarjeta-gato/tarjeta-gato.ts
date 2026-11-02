import { Component, computed, input } from '@angular/core';
import { Gato } from '../../../../shared/models/gato.model';
import { calcularEdad } from '../../utils/edad';
import { CaritaGato } from '../../../../shared/carita-gato/carita-gato';

@Component({
  imports: [CaritaGato],
  selector: 'app-tarjeta-gato',
  templateUrl: './tarjeta-gato.html',
})
export class TarjetaGato {
  readonly gato = input.required<Gato>();

  protected readonly edad = computed(() => {
    const nacimiento = this.gato().nacimiento;
    return nacimiento ? calcularEdad(nacimiento) : null;
  });
  protected readonly simboloSexo = computed(() => (this.gato().sexo === 'macho' ? '♂' : '♀'));
}
