import { Component, computed, input, model } from '@angular/core';

/** Círculos con los colores sugeridos y un picker para elegir cualquier otro. */
@Component({
  selector: 'app-selector-color',
  templateUrl: './selector-color.html',
})
export class SelectorColor {
  readonly valor = model.required<string>();
  readonly colores = input.required<readonly string[]>();
  /** Texto para lectores de pantalla, por ejemplo "Color de los ojos". */
  readonly etiqueta = input('Color');

  /** Verdadero cuando el color elegido no es uno de los sugeridos. */
  protected readonly esPersonalizado = computed(() => !this.colores().includes(this.valor()));

  protected elegirDelPicker(evento: Event): void {
    this.valor.set((evento.target as HTMLInputElement).value);
  }
}
