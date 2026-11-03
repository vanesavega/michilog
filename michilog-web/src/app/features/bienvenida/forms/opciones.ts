import { Sexo } from '../../../shared/models/gato.model';

export interface OpcionMes {
  valor: number;
  nombre: string;
}

export interface OpcionSexo {
  valor: Sexo;
  texto: string;
  icono: string;
  clase: string;
}

export const MESES: readonly OpcionMes[] = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
].map((nombre, i) => ({ valor: i + 1, nombre }));

export const DIAS: readonly number[] = Array.from({ length: 31 }, (_, i) => i + 1);

const ANIO_ACTUAL = new Date().getFullYear();
export const ANIOS: readonly number[] = Array.from({ length: 26 }, (_, i) => ANIO_ACTUAL - i);

export const SEXOS: readonly OpcionSexo[] = [
  { valor: 'hembra', texto: 'Hembra', icono: 'female', clase: 'bg-sexo-hembra text-texto' },
  { valor: 'macho', texto: 'Macho', icono: 'male', clase: 'bg-sexo-macho text-texto' },
];