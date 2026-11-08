import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GatosStore } from '../../../../shared/stores/gatos.store';
import { FichaGato } from '../../components/ficha-gato/ficha-gato';

@Component({
  imports: [RouterLink, FichaGato],
  selector: 'app-gato-perfil',
  templateUrl: './gato-perfil.html',
})
export class GatoPerfil {
  protected readonly store = inject(GatosStore);

  readonly id = input.required<string>();
  /** El guard de la ruta ya comprobó que el gato existe. */
  protected readonly gato = computed(() => this.store.porId(this.id())!);
}
