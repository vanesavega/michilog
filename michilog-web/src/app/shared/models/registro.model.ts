export type TipoRegistro = 'arenero' | 'agua' | 'comida' | 'animo' | 'vomito' | 'sintoma';

export interface Registro {
  id: string;
  gatoId: string;
  tipo: TipoRegistro;
  fecha: string;
  nota: string;
}

export type NuevoRegistro = Omit<Registro, 'id'>;
