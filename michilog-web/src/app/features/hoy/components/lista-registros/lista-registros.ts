import { Component, computed, input, output } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { CampoEditable, Registro } from '../../../../shared/models/registro.model';
import { TIPOS_REGISTRO } from '../../../../shared/models/tipos-registro';

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.html',
})
export class ListaRegistros {
  readonly registros = input.required<Registro[]>();
  readonly editar = output<{ id: string; campo: CampoEditable }>();

  protected readonly filas = computed(() =>
    this.registros().map((registro) => ({
      id: registro.id,
      nota: registro.nota,
      hora: format(parseISO(registro.fecha), 'h:mm a', { locale: es }),
      tipo: TIPOS_REGISTRO.find((t) => t.valor === registro.tipo)!,
    })),
  );
}
