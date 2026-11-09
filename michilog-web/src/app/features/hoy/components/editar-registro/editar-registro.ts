import { Component, computed, inject, input, linkedSignal, output } from '@angular/core';
import { FormField, form, maxLength, required, validate } from '@angular/forms/signals';
import { format, isFuture, parseISO, set } from 'date-fns';
import { CampoEditable, Registro } from '../../../../shared/models/registro.model';
import { TIPOS_REGISTRO } from '../../../../shared/models/tipos-registro';
import { RegistrosStore } from '../../../../shared/stores/registros.store';

const MAX_NOTA = 200;

/** Une el día del registro con la hora "HH:mm" escrita en el formulario. */
function conHora(fecha: string, hora: string): Date {
  const [horas, minutos] = hora.split(':').map(Number);
  return set(parseISO(fecha), { hours: horas, minutes: minutos, seconds: 0, milliseconds: 0 });
}

@Component({
  selector: 'app-editar-registro',
  imports: [FormField],
  templateUrl: './editar-registro.html',
})
export class EditarRegistro {
  private readonly registrosStore = inject(RegistrosStore);

  readonly registro = input.required<Registro>();
  /** Qué parte del registro se muestra para corregir. */
  readonly campo = input.required<CampoEditable>();
  readonly guardado = output<void>();
  readonly cancelar = output<void>();

  protected readonly maxNota = MAX_NOTA;
  protected readonly tipo = computed(() => TIPOS_REGISTRO.find((t) => t.valor === this.registro().tipo)!);

  /** Datos del formulario: se rehacen cada vez que llega otro registro. */
  private readonly datos = linkedSignal(() => ({
    hora: format(parseISO(this.registro().fecha), 'HH:mm'),
    nota: this.registro().nota,
  }));

  protected readonly formulario = form(this.datos, (campos) => {
    required(campos.hora, { message: 'Pon la hora.' });
    validate(campos.hora, ({ value }) =>
      value() && isFuture(conHora(this.registro().fecha, value()))
        ? { kind: 'futuro', message: 'La hora no puede ser futura.' }
        : undefined,
    );
    maxLength(campos.nota, MAX_NOTA, { message: `Máximo ${MAX_NOTA} letras.` });
  });

  /** Primer error del campo, solo cuando ya lo tocaron. */
  protected error(campo: 'hora' | 'nota'): string | null {
    const estado = this.formulario[campo]();
    return estado.touched() ? (estado.errors()[0]?.message ?? null) : null;
  }

  protected guardar(evento: Event): void {
    evento.preventDefault();
    this.formulario.hora().markAsTouched();
    this.formulario.nota().markAsTouched();
    if (this.formulario().invalid()) return;

    const { hora, nota } = this.formulario().value();
    this.registrosStore.actualizar(this.registro().id, {
      fecha: conHora(this.registro().fecha, hora).toISOString(),
      nota: nota.trim(),
    });
    this.guardado.emit();
  }
}
