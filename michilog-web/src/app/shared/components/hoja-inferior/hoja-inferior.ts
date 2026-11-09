import { Component, ElementRef, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-hoja-inferior',
  templateUrl: './hoja-inferior.html',
})
export class HojaInferior {
  readonly titulo = input.required<string>();
  /** Se emite al cerrarse por cualquier vía: botón, Escape o clic en el fondo. */
  readonly cerrado = output<void>();

  private readonly dialogo = viewChild.required<ElementRef<HTMLDialogElement>>('dialogo');

  abrir(): void {
    this.dialogo().nativeElement.showModal();
  }

  cerrar(): void {
    this.dialogo().nativeElement.close();
  }

  /** El fondo oscuro es parte del <dialog>: un clic directo sobre él es un clic fuera de la hoja. */
  protected clicEnFondo(evento: MouseEvent): void {
    if (evento.target === this.dialogo().nativeElement) this.cerrar();
  }
}
