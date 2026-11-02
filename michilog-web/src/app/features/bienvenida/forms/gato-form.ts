import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColorGato } from '../../../shared/carita-gato/pelaje';
import { NuevoGato, Sexo } from '../../../shared/models/gato.model';

export type GatoForm = FormGroup<{
  nombre: FormControl<string>;
  color: FormControl<ColorGato>;
  sexo: FormControl<Sexo | null>;
  mes: FormControl<number | null>;
  anio: FormControl<number | null>;
}>;

export function crearGatoForm(color: ColorGato): GatoForm {
  return new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(30)],
    }),
    color: new FormControl(color, { nonNullable: true }),
    sexo: new FormControl<Sexo | null>(null),
    mes: new FormControl<number | null>(null),
    anio: new FormControl<number | null>(null),
  });
}

export function aNuevoGato(form: GatoForm): NuevoGato {
  const { nombre, color, sexo, mes, anio } = form.getRawValue();
  return {
    nombre: nombre.trim(),
    color,
    sexo,
    nacimiento: mes && anio ? `${anio}-${String(mes).padStart(2, '0')}` : null,
    raza: '',
    pesoKg: null,
    esterilizado: false,
    notas: '',
  };
}