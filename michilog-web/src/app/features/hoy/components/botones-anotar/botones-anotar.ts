import { Component, input, output } from '@angular/core';
import { TipoRegistro } from '../../../../shared/models/registro.model';
import { InfoTipoRegistro } from '../../../../shared/models/tipos-registro';

@Component({
  selector: 'app-botones-anotar',
  templateUrl: './botones-anotar.html',
})
export class BotonesAnotar {
  readonly tipos = input.required<readonly InfoTipoRegistro[]>();
  /** Un toque: registro rápido. */
  readonly anotar = output<TipoRegistro>();
  /** Doble toque: quieren ajustar el registro que acaba de crear el primer toque. */
  readonly detallar = output<void>();

  /** `detail` cuenta los clics seguidos: 1 el primero, 2 el segundo. */
  protected tocar(evento: MouseEvent, tipo: TipoRegistro): void {
    if (evento.detail >= 2) this.detallar.emit();
    else this.anotar.emit(tipo);
  }
}
