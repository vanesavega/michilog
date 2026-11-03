import { computed, signal } from '@angular/core';

/**
 * Maneja en qué página va una lista dividida en páginas.
 * Recibe funciones (no valores) para que se actualice si cambian el total o el tamaño de página.
 */
export function crearPaginador(totalElementos: () => number, porPagina: () => number) {
  const pagina = signal(0);
  const totalPaginas = computed(() => Math.max(1, Math.ceil(totalElementos() / porPagina())));
  const inicio = computed(() => pagina() * porPagina());
  const esPrimera = computed(() => pagina() === 0);
  const esUltima = computed(() => pagina() === totalPaginas() - 1);

  return {
    pagina: pagina.asReadonly(),
    totalPaginas,
    inicio,
    esPrimera,
    esUltima,
    siguiente: () => pagina.update((p) => Math.min(p + 1, totalPaginas() - 1)),
    anterior: () => pagina.update((p) => Math.max(p - 1, 0)),
    /** Devuelve solo los elementos de la página actual. */
    recortar: <T>(lista: readonly T[]): T[] => lista.slice(inicio(), inicio() + porPagina()),
  };
}

export type Paginador = ReturnType<typeof crearPaginador>;
