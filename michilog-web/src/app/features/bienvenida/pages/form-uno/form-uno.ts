import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CamposGato } from '../../../gatos/components/campos-gato/campos-gato';
import { aNuevoGato, crearGatoForm } from '../../../gatos/forms/gato-form';
import { GatosStore } from '../../../gatos/gatos.store';

@Component({
  imports: [ ReactiveFormsModule, RouterLink, CamposGato ],
  selector: 'app-form-uno',
  templateUrl: './form-uno.html',
})
export class FormUno {
  private readonly store = inject(GatosStore);
  private readonly router = inject(Router);

  protected readonly gato = crearGatoForm('durazno');

  protected guardar(): void {
    if (this.gato.invalid) {
      this.gato.markAllAsTouched();
      return;
    }
    this.store.agregar(aNuevoGato(this.gato));
    this.router.navigate(['/hoy']);
  }
}
