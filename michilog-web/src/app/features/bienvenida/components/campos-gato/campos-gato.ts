import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CaritaGato } from '../../../../shared/carita-gato/carita-gato';
import { COLORES_GATO, ColorGato, PELAJE } from '../../../../shared/carita-gato/pelaje';
import { GatoForm } from '../../forms/gato-form';
import { ANIOS, DIAS, MESES, SEXOS } from '../../forms/opciones';

@Component({
  selector: 'app-campos-gato',
  imports: [ReactiveFormsModule, CaritaGato, NgClass],
  templateUrl: './campos-gato.html',
})
export class CamposGato {
  readonly grupo = input.required<GatoForm>();
  readonly titulo = input('Nombre');

  protected readonly colores = COLORES_GATO;
  protected readonly pelaje = PELAJE;
  protected readonly dias = DIAS;
  protected readonly meses = MESES;
  protected readonly anios = ANIOS;
  protected readonly sexos = SEXOS;

  protected get c() {
    return this.grupo().controls;
  }

  protected elegirColor(color: ColorGato): void {
    this.c.color.setValue(color);
  }
}