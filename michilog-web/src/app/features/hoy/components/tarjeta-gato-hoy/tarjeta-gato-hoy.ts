import { Component, computed, input, output } from '@angular/core';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { Gato } from '../../../../shared/models/gato.model';
import { InfoNivelEstado } from '../../../../shared/models/niveles-estado';
import { fondoPastel } from '../../../../shared/utils/fondo-pastel';

@Component({
  imports: [CaritaGato],
  selector: 'app-tarjeta-gato-hoy',
  templateUrl: './tarjeta-gato-hoy.html',
})
export class TarjetaGatoHoy {
  readonly gato = input.required<Gato>();
  readonly estado = input.required<InfoNivelEstado>();
  readonly verPerfil = output<void>();

  protected readonly fondo = computed(() => fondoPastel(this.gato().id));
}
