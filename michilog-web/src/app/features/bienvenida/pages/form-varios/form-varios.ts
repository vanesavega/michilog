import { Component, inject, input, numberAttribute, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { COLORES_GATO } from '../../../../shared/carita-gato/pelaje';
import { CamposGato } from '../../components/campos-gato/campos-gato';
import { aNuevoGato, crearGatoForm, GatoForm } from '../../forms/gato-form';
import { GatosStore } from '../../../gatos/gatos.store';

@Component({
  imports: [ReactiveFormsModule, RouterLink, CamposGato],
  selector: 'app-form-varios',
  templateUrl: './form-varios.html',
})
export class FormVarios implements OnInit {
  private readonly store = inject(GatosStore);
  private readonly router = inject(Router);

  readonly cantidad = input.required({ transform: numberAttribute });

  protected formulario!: FormGroup<{ gatos: FormArray<GatoForm> }>;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      gatos: new FormArray(
        Array.from({ length: this.cantidad() }, (_, i) => crearGatoForm(COLORES_GATO[i % COLORES_GATO.length])),
      ),
    });
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