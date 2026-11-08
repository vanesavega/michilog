import { Component, ElementRef, afterNextRender, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-campo-edad',
  templateUrl: './campo-edad.html',
})
export class CampoEdad {
  readonly etiqueta = input.required<string>();
  readonly edad = input.required<number>();
  readonly min = input(0);
  readonly max = input(40);
  readonly enfocar = input(false);
  readonly edadCambio = output<number>();

  private readonly campo = viewChild.required<ElementRef<HTMLInputElement>>('campo');

  constructor() {
    afterNextRender(() => {
      if (this.enfocar()) this.campo().nativeElement.focus();
    });
  }

  protected cambiar(delta: number): void {
    this.emitir(Math.min(this.max(), Math.max(this.min(), this.edad() + delta)));
  }

  protected escribir(): void {
    const input = this.campo().nativeElement;
    const digitos = input.value.replace(/\D/g, '');
    if (digitos === '') {
      input.value = '';
      return;
    }
    const numero = Math.min(this.max(), Math.max(this.min(), Number(digitos)));
    input.value = String(numero);
    this.emitir(numero);
  }

  protected restaurar(): void {
    this.campo().nativeElement.value = String(this.edad());
  }

  private emitir(nueva: number): void {
    if (nueva !== this.edad()) this.edadCambio.emit(nueva);
  }
}
