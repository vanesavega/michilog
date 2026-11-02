import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { GATOS_INICIALES } from "./data/gatos-iniciales";
import { Gato, NuevoGato } from './models/gato.model'
import { computed } from "@angular/core";

interface GatosState {
    gatos: Gato[];
}

const estadoInicial: GatosState = {
    gatos: GATOS_INICIALES
}

export const GatosStore = signalStore(
    { providedIn: 'root' },
    withState(estadoInicial),
    withComputed(({ gatos }) => ({
        total: computed(() => gatos().length),
        ordenados: computed(() => [...gatos()].sort((a, b) => a.nombre.localeCompare(b.nombre)))
    })),
    withMethods((store) => ({
        porId(id: string): Gato | undefined {
            return store.gatos().find(g => g.id === id);
        },
        agregar(datos: NuevoGato): Gato {
            const gato: Gato = {id: crypto.randomUUID(), ...datos};
            patchState(store, ({gatos}) => ({gatos: [...gatos, gato]}))
            return gato;
        },
        actualizar(id: string, cambios: Partial<NuevoGato>): void {
            patchState(store, ({gatos}) => ({
                gatos: gatos.map(g => g.id === id ? {...g, ...cambios} : g),
            }));
        },
        agregarVarios(lista: NuevoGato[]): void {
            const nuevos: Gato[] = lista.map(datos => ({ id: crypto.randomUUID(), ...datos }));
            patchState(store, ({ gatos }) => ({ gatos: [...gatos, ...nuevos] }));
        },
    })),
);