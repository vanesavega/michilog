import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColorGato } from '../../../shared/components/carita-gato/pelaje';
import { NuevoGato, Sexo } from '../../../shared/models/gato.model';

export const MAX_EDAD = 40;
export const MAX_NOMBRE = 30;

export type GatoForm = FormGroup<{
  nombre: FormControl<string>;
  color: FormControl<ColorGato>;
  sexo: FormControl<Sexo | null>;
  edad: FormControl<number | null>;
}>;

export function crearGatoForm(color: ColorGato): GatoForm {
  return new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(MAX_NOMBRE)],
    }),
    color: new FormControl(color, { nonNullable: true }),
    sexo: new FormControl<Sexo | null>(null),
    // La edad es opcional. Se escribe o se ajusta con los botones +/−.
    edad: new FormControl<number | null>(null, { validators: [Validators.min(0), Validators.max(MAX_EDAD)] }),
  });
}

export function aNuevoGato(form: GatoForm): NuevoGato {
  const { nombre, color, sexo, edad } = form.getRawValue();
  return {
    nombre: nombre.trim(),
    color,
    sexo,
    nacimiento: null,
    edad,
    raza: '',
    pesoKg: null,
    esterilizado: false,
    notas: '',
  };
}