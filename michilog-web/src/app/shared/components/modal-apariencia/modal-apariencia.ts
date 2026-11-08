import { Component, ElementRef, computed, input, output, signal, viewChild } from '@angular/core';
import { Apariencia } from '../../models/apariencia.model';
import { CaritaGato } from '../carita-gato/carita-gato';
import { COLORES_OJOS, COLORES_PELAJE } from '../carita-gato/paletas';
import { SelectorColor } from '../selector-color/selector-color';

@Component({
  selector: 'app-modal-apariencia',
  imports: [CaritaGato, SelectorColor],
  templateUrl: './modal-apariencia.html',
})
export class ModalApariencia {
  readonly apariencia = input.required<Apariencia>();
  readonly aplicar = output<Apariencia>();

  private readonly dialogo = viewChild.required<ElementRef<HTMLDialogElement>>('dialogo');

  protected readonly pelaje = signal('');
  protected readonly ojos = signal('');
  protected readonly vista = computed<Apariencia>(() => ({ pelaje: this.pelaje(), ojos: this.ojos() }));

  protected readonly coloresPelaje = COLORES_PELAJE;
  protected readonly coloresOjos = COLORES_OJOS;

  abrir(): void {
    this.pelaje.set(this.apariencia().pelaje);
    this.ojos.set(this.apariencia().ojos);
    this.dialogo().nativeElement.showModal();
  }

  protected cerrar(): void {
    this.dialogo().nativeElement.close();
  }

  protected confirmar(): void {
    this.aplicar.emit(this.vista());
    this.cerrar();
  }
}
