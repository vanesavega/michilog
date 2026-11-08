import { Component, computed, input } from '@angular/core';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { Gato } from '../../../../shared/models/gato.model';
import { fondoPastel } from '../../../../shared/utils/fondo-pastel';

@Component({
  imports: [CaritaGato],
  selector: 'app-avatar-gato',
  templateUrl: './avatar-gato.html',
})
export class AvatarGato {
  readonly gato = input.required<Gato>();

  protected readonly fondo = computed(() => fondoPastel(this.gato().id));
}
