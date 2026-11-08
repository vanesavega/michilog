import { Component, computed, input } from '@angular/core';
import { fondoPastel } from '../../../../shared/utils/fondo-pastel';
import { Gato } from '../../../../shared/models/gato.model';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { textoEdad } from '../../../../shared/utils/edad';
import { textoNacimiento } from '../../../../shared/utils/nacimiento';

@Component({
  imports: [CaritaGato],
  selector: 'app-ficha-gato',
  templateUrl: './ficha-gato.html',
})
export class FichaGato {
  readonly gato = input.required<Gato>();

  protected readonly fondo = computed(() => fondoPastel(this.gato().id));
  protected readonly edad = computed(() => textoEdad(this.gato().nacimiento, this.gato().edadMeses));
  protected readonly nacimiento = computed(() => {
    const nacimiento = this.gato().nacimiento;
    return nacimiento ? textoNacimiento(nacimiento) : null;
  });
  protected readonly esterilizado = computed(() => (this.gato().sexo === 'hembra' ? 'Esterilizada' : 'Esterilizado'));
}
