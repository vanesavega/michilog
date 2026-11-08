import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Registro, TipoRegistro } from '../models/registro.model';

interface RegistrosState {
  registros: Registro[];
}

const estadoInicial: RegistrosState = {
  registros: [],
};

export const RegistrosStore = signalStore(
  { providedIn: 'root' },
  withState(estadoInicial),
  withMethods((store) => ({
    /** Registro rápido: anota "ahora" y devuelve el registro creado. */
    anotar(gatoId: string, tipo: TipoRegistro, nota = ''): Registro {
      const registro: Registro = { id: crypto.randomUUID(), gatoId, tipo, fecha: new Date().toISOString(), nota };
      patchState(store, ({ registros }) => ({ registros: [...registros, registro] }));
      return registro;
    },
    eliminar(id: string): void {
      patchState(store, ({ registros }) => ({ registros: registros.filter((r) => r.id !== id) }));
    },
  })),
);
