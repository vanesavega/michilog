import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apariencia } from '../../../shared/models/apariencia.model';
import { NuevoGato, Sexo } from '../../../shared/models/gato.model';

export const MAX_EDAD = 40;
export const MAX_EDAD_MESES = MAX_EDAD * 12 + 11;
export const MAX_NOMBRE = 30;

export type GatoForm = FormGroup<{
  nombre: FormControl<string>;
  apariencia: FormControl<Apariencia>;
  sexo: FormControl<Sexo | null>;
  edadMeses: FormControl<number | null>;
}>;

export function crearGatoForm(apariencia: Apariencia): GatoForm {
  return new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(MAX_NOMBRE)],
    }),
    apariencia: new FormControl(apariencia, { nonNullable: true }),
    sexo: new FormControl<Sexo | null>(null),
    edadMeses: new FormControl<number | null>(null, {
      validators: [Validators.pattern(/^\d+$/), Validators.min(0), Validators.max(MAX_EDAD_MESES)],
    }),
  });
}

export function aNuevoGato(form: GatoForm): NuevoGato {
  const { nombre, apariencia, sexo, edadMeses } = form.getRawValue();
  return {
    nombre: nombre.trim(),
    apariencia,
    sexo,
    nacimiento: null,
    edadMeses,
    raza: '',
    pesoKg: null,
    esterilizado: false,
    notas: '',
  };
}