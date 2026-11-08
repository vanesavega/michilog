const FONDOS = ['bg-campo-lavanda', 'bg-campo-menta', 'bg-campo-durazno', 'bg-campo-mantequilla', 'bg-campo-cielo'];

/** Clase de fondo pastel estable para una semilla (por ejemplo, el id del gato). */
export function fondoPastel(semilla: string | number): string {
  let suma = 0;
  for (const letra of String(semilla)) suma = (suma * 31 + letra.charCodeAt(0)) >>> 0;
  return FONDOS[suma % FONDOS.length];
}
