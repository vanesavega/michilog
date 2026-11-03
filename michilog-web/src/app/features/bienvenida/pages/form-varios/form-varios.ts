import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { COLORES_GATO } from '../../../../shared/components/carita-gato/pelaje';
import { CamposGato } from '../../components/campos-gato/campos-gato';
import { aNuevoGato, crearGatoForm, GatoForm } from '../../forms/gato-form';
import { crearPaginador } from '../../../../shared/components/paginacion/paginador';
import { NavegacionPasos } from '../../../../shared/components/paginacion/navegacion-pasos';
import { BienvenidaStore } from '../../bienvenida.store';
import { GatosStore } from '../../../../shared/stores/gatos.store';

/** Hasta este número de gatos caben todos en una sola página. */
const MAX_SIN_PAGINAR = 5;
/** Gatos por página cuando hay que paginar. */
const POR_PAGINA = 4;

@Component({
  imports: [ReactiveFormsModule, RouterLink, CamposGato, NavegacionPasos],
  selector: 'app-form-varios',
  templateUrl: './form-varios.html',
})
export class FormVarios implements OnInit {
  private readonly store = inject(GatosStore);
  private readonly router = inject(Router);

  /** Cuántos gatos eligió la persona en el paso anterior (el guard asegura que hay al menos uno). */
  protected readonly cantidad = inject(BienvenidaStore).cantidad;

  protected formulario!: FormGroup<{ gatos: FormArray<GatoForm> }>;
  protected readonly paginador = crearPaginador(
    () => this.cantidad(),
    () => (this.cantidad() > MAX_SIN_PAGINAR ? POR_PAGINA : this.cantidad()),
  );

  ngOnInit(): void {
    this.formulario = new FormGroup({
      gatos: new FormArray(
        Array.from({ length: this.cantidad() }, (_, i) => crearGatoForm(COLORES_GATO[i % COLORES_GATO.length])),
      ),
    });
  }

  protected get gruposPagina(): GatoForm[] {
    return this.paginador.recortar(this.formulario.controls.gatos.controls);
  }

  /** Aviso corto cuando intentan avanzar con nombres vacíos: singular o plural según cuántos falten. */
  protected get aviso(): string | null {
    const faltan = this.gruposPagina.filter((g) => g.controls.nombre.touched && g.controls.nombre.invalid).length;
    if (!faltan) return null;
    return faltan === 1 ? 'Déjanos saber su nombre' : 'Déjanos saber sus nombres';
  }

  /** Avanza solo si los gatos de esta página están bien; si no, marca los que faltan. */
  protected siguiente(): void {
    const grupos = this.gruposPagina;
    if (grupos.some((g) => g.invalid)) {
      grupos.forEach((g) => g.markAllAsTouched());
      return;
    }
    this.paginador.siguiente();
  }

  protected anterior(): void {
    this.paginador.anterior();
  }

  protected guardar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.store.agregarVarios(this.formulario.controls.gatos.controls.map(aNuevoGato));
    this.router.navigate(['/hoy']);
  }
}