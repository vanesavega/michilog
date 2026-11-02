import { ColorGato } from "../../../shared/carita-gato/pelaje";

export type Sexo = 'macho' | 'hembra';
export interface Gato {
    id: string, 
    nombre: string,
    sexo: Sexo | null,
    color: ColorGato,
    nacimiento: string | null,
    raza: string,
    pesoKg: number | null,
    esterilizado: boolean,
    notas: string
}

export type NuevoGato = Omit<Gato, 'id'>;