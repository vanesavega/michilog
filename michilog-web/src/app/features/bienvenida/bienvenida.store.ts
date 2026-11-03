import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

interface BienvenidaState {
  /** Cuántos gatos eligió la persona. 0 mientras no haya elegido. */
  cantidad: number;
}

export const BienvenidaStore = signalStore(
  { providedIn: 'root' },
  withState<BienvenidaState>({ cantidad: 0 }),
  withMethods((store) => ({
    elegirCantidad(cantidad: number): void {
      patchState(store, { cantidad });
    },
  })),
);
