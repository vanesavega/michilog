import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { COLORES_GATO, ColorGato, PELAJE } from '../../../../shared/components/carita-gato/pelaje';
import { CampoEdad } from '../../../../shared/components/campo-edad/campo-edad';
import { GatoForm, MAX_EDAD } from '../../forms/gato-form';
import { SEXOS } from '../../forms/opciones';

/** Fondo de la tarjeta: versión suave del color del pelaje (clases completas para Tailwind). */
const FONDOS: Record<ColorGato, string> = {
  mantequilla: 'bg-campo-mantequilla',
  lavanda: 'bg-campo-lavanda',
  menta: 'bg-campo-menta',
  durazno: 'bg-campo-durazno',
  cielo: 'bg-campo-cielo',
};

@Component({
  selector: 'app-campos-gato',
  imports: [ReactiveFormsModule, CaritaGato, CampoEdad, NgClass],
  templateUrl: './campos-gato.html',
})
export class CamposGato {
  readonly grupo = input.required<GatoForm>();
  /** Número del gato (sello sobre la tarjeta). Null cuando es un solo gato. */
  readonly numero = input<number | null>(null);
  /** Con más de 3 gatos no se piden colores: solo nombre, sexo y edad. */
  readonly compacto = input(false);

  protected readonly colores = COLORES_GATO;
  protected readonly pelaje = PELAJE;
  protected readonly fondos = FONDOS;
  protected readonly sexos = SEXOS;
  protected readonly maxEdad = MAX_EDAD;
  protected readonly edadAbierta = signal(false);

  protected get c() {
    return this.grupo().controls;
  }

  protected elegirColor(color: ColorGato): void {
    this.c.color.setValue(color);
  }
}