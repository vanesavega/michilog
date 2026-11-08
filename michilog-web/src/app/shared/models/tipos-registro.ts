import { TipoRegistro } from './registro.model';

export interface InfoTipoRegistro {
  valor: TipoRegistro;
  texto: string;
  /** Nombre del ícono en Material Symbols. */
  icono: string;
  /** Clase de fondo del chip (completa, para que Tailwind la detecte). */
  fondo: string;
}

export const TIPOS_REGISTRO: readonly InfoTipoRegistro[] = [
  { valor: 'arenero', texto: 'Arenero', icono: 'pets', fondo: 'bg-chip-menta' },
  { valor: 'agua', texto: 'Agua', icono: 'water_drop', fondo: 'bg-chip-cielo' },
  { valor: 'comida', texto: 'Comida', icono: 'restaurant', fondo: 'bg-chip-durazno' },
  { valor: 'animo', texto: 'Ánimo', icono: 'sentiment_satisfied', fondo: 'bg-chip-mantequilla' },
  { valor: 'vomito', texto: 'Vómito', icono: 'sick', fondo: 'bg-chip-lavanda' },
  { valor: 'sintoma', texto: 'Síntoma', icono: 'thermostat', fondo: 'bg-chip-menta' },
];
