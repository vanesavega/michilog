import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CaritaGato } from '../../../../shared/carita-gato/carita-gato';
import { COLORES_GATO } from '../../../../shared/carita-gato/pelaje';
import { GatoForm } from '../../forms/gato-form';
import { ANIOS, MESES, SEXOS } from '../../forms/opciones';

@Component({
  selector: 'app-campos-gato',
  imports: [ReactiveFormsModule, CaritaGato],
  templateUrl: './campos-gato.html',
})
export class CamposGato {
  readonly grupo = input.required<GatoForm>();
  readonly titulo = input('Nombre');

  protected readonly meses = MESES;
  protected readonly anios = ANIOS;
  protected readonly sexos = SEXOS;

  protected get c() {
    return this.grupo().controls;
  }

  protected cambiarColor(): void {
    const actual = COLORES_GATO.indexOf(this.c.color.value);
    this.c.color.setValue(COLORES_GATO[(actual + 1) % COLORES_GATO.length]);
  }
}