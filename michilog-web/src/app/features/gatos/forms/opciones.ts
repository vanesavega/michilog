import { Sexo } from '../models/gato.model';

export interface OpcionMes {
  valor: number;
  nombre: string;
}

export const MESES: readonly OpcionMes[] = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
].map((nombre, i) => ({ valor: i + 1, nombre }));

const ANIO_ACTUAL = new Date().getFullYear();
export const ANIOS: readonly number[] = Array.from({ length: 26 }, (_, i) => ANIO_ACTUAL - i);

export const SEXOS: readonly { valor: Sexo; texto: string }[] = [
  { valor: 'hembra', texto: 'Hembra' },
  { valor: 'macho', texto: 'Macho' },
];