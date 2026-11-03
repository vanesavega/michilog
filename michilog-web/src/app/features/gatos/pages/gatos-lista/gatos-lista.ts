import { Component, inject } from '@angular/core';
import { GatosStore } from '../../../../shared/stores/gatos.store';
import { TarjetaGato } from './../../components/tarjeta-gato/tarjeta-gato'
@Component({
  imports: [ TarjetaGato ],
  selector: 'app-gatos-lista',
  templateUrl: './gatos-lista.html',
})
export class GatosLista {
  protected readonly store = inject(GatosStore)
}
