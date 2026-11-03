import { Component, computed, input } from '@angular/core';
import { Gato } from '../../../../shared/models/gato.model';
import { textoEdad } from '../../utils/edad';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';

@Component({
  imports: [CaritaGato],
  selector: 'app-tarjeta-gato',
  templateUrl: './tarjeta-gato.html',
})
export class TarjetaGato {
  readonly gato = input.required<Gato>();

  protected readonly edad = computed(() => textoEdad(this.gato().nacimiento, this.gato().edad));
  protected readonly simboloSexo = computed(() => (this.gato().sexo === 'macho' ? '♂' : '♀'));
}