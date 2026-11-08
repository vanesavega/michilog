import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { GATOS_INICIALES } from "../../features/gatos/data/gatos-iniciales";
import { Gato, NuevoGato } from '../models/gato.model'
import { computed } from "@angular/core";

interface GatosState {
    gatos: Gato[];
    seleccionadoId: string | null;
}

const estadoInicial: GatosState = {
    gatos: GATOS_INICIALES,
    seleccionadoId: null,
}

export const GatosStore = signalStore(
    { providedIn: 'root' },
    withState(estadoInicial),
    withComputed(({ gatos, seleccionadoId }) => {
        const ordenados = computed(() => [...gatos()].sort((a, b) => a.nombre.localeCompare(b.nombre)));
        return {
            total: computed(() => gatos().length),
            ordenados,
            /** El gato elegido; si no hay ninguno, el primero por orden alfabético. */
            seleccionado: computed(() => gatos().find(g => g.id === seleccionadoId()) ?? ordenados()[0] ?? null),
        };
    }),
    withMethods((store) => ({
        seleccionar(id: string): void {
            patchState(store, { seleccionadoId: id });
        },
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