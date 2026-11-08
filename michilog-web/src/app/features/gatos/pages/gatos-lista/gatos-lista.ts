import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GatosStore } from '../../../../shared/stores/gatos.store';
import { AvatarGato } from '../../components/avatar-gato/avatar-gato';

@Component({
  imports: [RouterLink, AvatarGato],
  selector: 'app-gatos-lista',
  templateUrl: './gatos-lista.html',
})
export class GatosLista {
  protected readonly store = inject(GatosStore);
}
