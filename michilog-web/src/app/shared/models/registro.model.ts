export type TipoRegistro = 'arenero' | 'agua' | 'comida' | 'vomito';

/** Lo que se puede corregir de un registro ya anotado. */
export type CampoEditable = 'hora' | 'nota';

export interface Registro {
  id: string;
  gatoId: string;
  tipo: TipoRegistro;
  fecha: string;
  nota: string;
}

export type NuevoRegistro = Omit<Registro, 'id'>;
