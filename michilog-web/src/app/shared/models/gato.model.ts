import { ColorGato } from "../components/carita-gato/pelaje";

export type Sexo = 'macho' | 'hembra';

export interface Gato {
    id: string,
    nombre: string,
    sexo: Sexo | null,
    color: ColorGato,
    nacimiento: string | null,
    edad: number | null,
    raza: string,
    pesoKg: number | null,
    esterilizado: boolean,
    notas: string
}

export type NuevoGato = Omit<Gato, 'id'>;