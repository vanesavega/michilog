import { Component, ElementRef, afterNextRender, input, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

/** Edad opcional en años: se escribe o se ajusta con +/−. Vacío significa "sin indicar". */
@Component({
  selector: 'app-campo-edad',
  imports: [ReactiveFormsModule],
  templateUrl: './campo-edad.html',
})
export class CampoEdad {
  readonly control = input.required<FormControl<number | null>>();
  readonly max = input(40);
  /** Si es true, el cursor entra al campo apenas aparece. */
  readonly enfocar = input(false);

  private readonly campo = viewChild.required<ElementRef<HTMLInputElement>>('campo');

  constructor() {
    afterNextRender(() => {
      if (this.enfocar()) this.campo().nativeElement.focus();
    });
  }

  /** Sin edad (null) → 0 → 1 … y al restar desde 0 vuelve a "sin indicar". */
  protected cambiar(delta: number): void {
    const actual = this.control().value;
    if (actual === null) {
      if (delta > 0) this.control().setValue(0);
      return;
    }
    const nueva = actual + delta;
    this.control().setValue(nueva < 0 ? null : Math.min(this.max(), nueva));
  }

  /** Al salir del campo: deja un número entero entre 0 y el máximo (o vacío). */
  protected ajustar(): void {
    const edad = this.control().value;
    if (edad === null) return;
    this.control().setValue(Math.min(this.max(), Math.max(0, Math.round(edad))));
  }
}
