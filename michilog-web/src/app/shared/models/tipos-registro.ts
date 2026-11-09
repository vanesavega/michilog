import { TipoRegistro } from './registro.model';

export interface InfoTipoRegistro {
  valor: TipoRegistro;
  texto: string;
  icono: string;
  fondo: string;
}

export const TIPOS_REGISTRO: readonly InfoTipoRegistro[] = [
  { valor: 'arenero', texto: 'Arenero', icono: 'pets', fondo: 'bg-chip-menta' },
  { valor: 'agua', texto: 'Agua', icono: 'water_drop', fondo: 'bg-chip-cielo' },
  { valor: 'comida', texto: 'Comida', icono: 'restaurant', fondo: 'bg-chip-durazno' },
  { valor: 'vomito', texto: 'Vómito', icono: 'sick', fondo: 'bg-chip-lavanda' },
];
