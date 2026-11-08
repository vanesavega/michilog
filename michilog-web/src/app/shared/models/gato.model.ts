import { Apariencia } from './apariencia.model';


export type Sexo = 'macho' | 'hembra';

export interface Gato {
    id: string,
    nombre: string,
    sexo: Sexo | null,
    apariencia: Apariencia,
    nacimiento: string | null,
    edadMeses: number | null,
    raza: string,
    pesoKg: number | null,
    esterilizado: boolean,
    notas: string
}

export type NuevoGato = Omit<Gato, 'id'>;