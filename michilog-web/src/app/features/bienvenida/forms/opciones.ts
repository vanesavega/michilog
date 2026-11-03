import { Sexo } from '../../../shared/models/gato.model';

export interface OpcionSexo {
  valor: Sexo;
  texto: string;
  icono: string;
  clase: string;
}

export const SEXOS: readonly OpcionSexo[] = [
  { valor: 'hembra', texto: 'Gatita', icono: 'female', clase: 'bg-sexo-hembra text-texto' },
  { valor: 'macho', texto: 'Gatito', icono: 'male', clase: 'bg-sexo-macho text-texto' },
];