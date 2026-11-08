import { computed, inject } from '@angular/core';
import { signalStore, withComputed } from '@ngrx/signals';
import { isToday, parseISO } from 'date-fns';
import { NivelEstado } from '../models/estado-gato.model';
import { calcularEstado } from '../utils/calcular-estado';
import { GatosStore } from './gatos.store';
import { RegistrosStore } from './registros.store';

/** Estado de hoy de cada gato. Si la API pasa a calcularlo, solo cambia de dónde sale `porGato`. */
export const EstadosStore = signalStore(
  { providedIn: 'root' },
  withComputed(() => {
    const gatos = inject(GatosStore);
    const registros = inject(RegistrosStore);
    return {
      porGato: computed<Record<string, NivelEstado>>(() => {
        const deHoy = registros.registros().filter((r) => isToday(parseISO(r.fecha)));
        return Object.fromEntries(
          gatos.gatos().map((gato) => [gato.id, calcularEstado(deHoy.filter((r) => r.gatoId === gato.id))]),
        );
      }),
    };
  }),
);
