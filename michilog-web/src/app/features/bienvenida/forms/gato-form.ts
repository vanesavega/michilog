import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColorGato } from '../../../shared/carita-gato/pelaje';
import { NuevoGato, Sexo } from '../../../shared/models/gato.model';

export type GatoForm = FormGroup<{
  nombre: FormControl<string>;
  color: FormControl<ColorGato>;
  sexo: FormControl<Sexo | null>;
  edad: FormControl<number | null>;
  dia: FormControl<number | null>;
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
    // Todo lo de edad y fecha es opcional. Si hay año de nacimiento, la edad se ignora.
    edad: new FormControl<number | null>(null, { validators: [Validators.min(0), Validators.max(40)] }),
    dia: new FormControl<number | null>(null),
    mes: new FormControl<number | null>(null),
    anio: new FormControl<number | null>(null),
  });
}

const dos = (n: number) => String(n).padStart(2, '0');

/** Arma la fecha con la precisión que la persona haya llenado: año, año-mes o año-mes-día. */
export function nacimientoDe(dia: number | null, mes: number | null, anio: number | null): string | null {
  if (!anio) return null;
  if (!mes) return String(anio);
  const base = `${anio}-${dos(mes)}`;
  return dia ? `${base}-${dos(dia)}` : base;
}

export function aNuevoGato(form: GatoForm): NuevoGato {
  const { nombre, color, sexo, edad, dia, mes, anio } = form.getRawValue();
  return {
    nombre: nombre.trim(),
    color,
    sexo,
    nacimiento: nacimientoDe(dia, mes, anio),
    edad: anio ? null : edad,
    raza: '',
    pesoKg: null,
    esterilizado: false,
    notas: '',
  };
}