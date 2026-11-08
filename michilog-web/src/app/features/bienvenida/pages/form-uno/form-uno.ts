import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CamposGato } from '../../components/campos-gato/campos-gato';
import { aNuevoGato, crearGatoForm } from '../../forms/gato-form';
import { NavegacionPasos } from '../../../../shared/components/paginacion/navegacion-pasos';
import { OJOS_POR_DEFECTO } from '../../../../shared/models/apariencia.model';
import { GatosStore } from '../../../../shared/stores/gatos.store';

@Component({
  imports: [ReactiveFormsModule, RouterLink, CamposGato, NavegacionPasos],
  selector: 'app-form-uno',
  templateUrl: './form-uno.html',
})
export class FormUno {
  private readonly store = inject(GatosStore);
  private readonly router = inject(Router);

  protected readonly gato = crearGatoForm({ pelaje: '#e8913a', ojos: OJOS_POR_DEFECTO });

  protected get aviso(): string | null {
    const nombre = this.gato.controls.nombre;
    return nombre.touched && nombre.invalid ? 'Déjanos saber su nombre' : null;
  }

  protected guardar(): void {
    if (this.gato.invalid) {
      this.gato.markAllAsTouched();
      return;
    }
    this.store.agregar(aNuevoGato(this.gato));
    this.router.navigate(['/hoy']);
  }
}