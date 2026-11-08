import { Component, input, output } from '@angular/core';
import { TipoRegistro } from '../../../../shared/models/registro.model';
import { InfoTipoRegistro } from '../../../../shared/models/tipos-registro';

@Component({
  selector: 'app-botones-anotar',
  templateUrl: './botones-anotar.html',
})
export class BotonesAnotar {
  readonly tipos = input.required<readonly InfoTipoRegistro[]>();
  readonly anotar = output<TipoRegistro>();
}
