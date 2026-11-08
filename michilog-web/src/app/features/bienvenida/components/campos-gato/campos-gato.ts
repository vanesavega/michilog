import { NgClass } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CaritaGato } from '../../../../shared/components/carita-gato/carita-gato';
import { CampoEdad } from '../../../../shared/components/campo-edad/campo-edad';
import { ModalApariencia } from '../../../../shared/components/modal-apariencia/modal-apariencia';
import { MESES_POR_ANIO, partirEdad, sumarEdad } from '../../../../shared/utils/edad';
import { fondoPastel } from '../../../../shared/utils/fondo-pastel';
import { GatoForm, MAX_EDAD } from '../../forms/gato-form';
import { SEXOS } from '../../forms/opciones';

@Component({
  selector: 'app-campos-gato',
  imports: [ReactiveFormsModule, CaritaGato, CampoEdad, ModalApariencia, NgClass],
  templateUrl: './campos-gato.html',
})
export class CamposGato {
  readonly grupo = input.required<GatoForm>();
  /** Número del gato (sello sobre la tarjeta). Null cuando es un solo gato. */
  readonly numero = input<number | null>(null);
  /** Con más de 3 gatos no se piden colores: solo nombre, sexo y edad. */
  readonly compacto = input(false);

  protected readonly sexos = SEXOS;
  protected readonly maxEdad = MAX_EDAD;
  protected readonly maxMeses = MESES_POR_ANIO - 1;
  /** Solo sirve para dar el foco a los años justo cuando se abre la edad. */
  protected readonly edadAbierta = signal(false);
  protected readonly mesesAbiertos = signal(false);
  protected readonly fondo = computed(() => fondoPastel(this.numero() ?? 0));

  protected get c() {
    return this.grupo().controls;
  }

  /** La edad se guarda en meses; aquí se separa en años y meses sueltos para mostrarla. */
  protected get anios(): number {
    return partirEdad(this.c.edadMeses.value ?? 0).anios;
  }

  protected get mesesSueltos(): number {
    return partirEdad(this.c.edadMeses.value ?? 0).meses;
  }

  protected get menorDeUnAnio(): boolean {
    return (this.c.edadMeses.value ?? 0) < MESES_POR_ANIO;
  }

  /** Con 1 año o más, los meses aparecen cuando el usuario los pide o ya hay. */
  protected get mesesVisibles(): boolean {
    return this.mesesAbiertos() || this.mesesSueltos > 0;
  }

  /** Al agregar la edad se empieza en 1 año. */
  protected abrirEdad(): void {
    this.c.edadMeses.setValue(MESES_POR_ANIO);
    this.edadAbierta.set(true);
  }

  protected elegirMenorDeUnAnio(): void {
    this.c.edadMeses.setValue(1);
    this.mesesAbiertos.set(false);
  }

  protected elegirUnAnioOMas(): void {
    this.c.edadMeses.setValue(MESES_POR_ANIO);
  }

  protected cambiarAnios(anios: number): void {
    this.c.edadMeses.setValue(sumarEdad(anios, this.mesesSueltos));
  }

  protected cambiarMeses(meses: number): void {
    this.c.edadMeses.setValue(sumarEdad(this.anios, meses));
  }

  /** Vuelve al botón "Agregar edad" y deja la edad sin indicar. */
  protected quitarEdad(): void {
    this.c.edadMeses.setValue(null);
    this.edadAbierta.set(false);
    this.mesesAbiertos.set(false);
  }
}
