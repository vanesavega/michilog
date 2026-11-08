import { NivelEstado } from './estado-gato.model';

export interface InfoNivelEstado {
  texto: string;
  /** Nombre del ícono en Material Symbols. */
  icono: string;
  /** Clase de fondo del chip (completa, para que Tailwind la detecte). */
  fondo: string;
}

export const NIVELES_ESTADO: Record<NivelEstado, InfoNivelEstado> = {
  'sin-registros': { texto: 'Sin registros hoy', icono: 'edit_note', fondo: 'bg-superficie' },
  normal: { texto: 'Todo normal', icono: 'check_circle', fondo: 'bg-chip-menta' },
  vigilar: { texto: 'Vigilar', icono: 'visibility', fondo: 'bg-chip-mantequilla' },
  revisar: { texto: 'Revisar con el vet', icono: 'warning', fondo: 'bg-chip-durazno' },
};
