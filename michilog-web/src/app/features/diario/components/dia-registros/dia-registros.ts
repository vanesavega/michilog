import { Component, computed, input } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Registro } from '../../../../shared/models/registro.model';
import { TIPOS_REGISTRO } from '../../../../shared/models/tipos-registro';

@Component({
  selector: 'app-dia-registros',
  templateUrl: './dia-registros.html',
})
export class DiaRegistros {
  readonly titulo = input.required<string>();
  readonly registros = input.required<Registro[]>();

  protected readonly filas = computed(() =>
    this.registros().map((registro) => ({
      id: registro.id,
      nota: registro.nota,
      hora: format(parseISO(registro.fecha), 'h:mm a', { locale: es }),
      tipo: TIPOS_REGISTRO.find((t) => t.valor === registro.tipo)!,
    })),
  );
}
