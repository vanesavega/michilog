import { differenceInMonths } from 'date-fns';
import { partirNacimiento } from './nacimiento';

export const MESES_POR_ANIO = 12;

const textoMeses = (n: number) => (n === 1 ? '1 mes' : `${n} meses`);
const textoAnios = (n: number) => (n === 1 ? '1 año' : `${n} años`);

/** Edad total en meses → años completos y meses sueltos (0 a 11). */
export function partirEdad(totalMeses: number): { anios: number; meses: number } {
    return { anios: Math.floor(totalMeses / MESES_POR_ANIO), meses: totalMeses % MESES_POR_ANIO };
}

/** Años y meses sueltos → edad total en meses. */
export function sumarEdad(anios: number, meses: number): number {
    return anios * MESES_POR_ANIO + meses;
}

/** Recibe 'YYYY', 'YYYY-MM' o 'YYYY-MM-DD' y devuelve la edad con la precisión disponible. */
export function calcularEdad(nacimiento: string): string {
    const { anio, mes, dia } = partirNacimiento(nacimiento);
    const totalMeses = differenceInMonths(new Date(), new Date(anio!, (mes ?? 1) - 1, dia ?? 1));

    if (totalMeses < 1) return 'menos de un mes';
    if (totalMeses < MESES_POR_ANIO) return textoMeses(totalMeses);

    return textoAnios(partirEdad(totalMeses).anios);
}

/** Edad en texto a partir de la fecha de nacimiento o, si no existe, de la edad en meses. */
export function textoEdad(nacimiento: string | null, edadMeses: number | null): string | null {
    if (nacimiento) return calcularEdad(nacimiento);
    if (edadMeses === null) return null;
    if (edadMeses < 1) return 'menos de un mes';

    const { anios, meses } = partirEdad(edadMeses);
    if (anios === 0) return textoMeses(meses);
    return meses === 0 ? textoAnios(anios) : `${textoAnios(anios)} y ${textoMeses(meses)}`;
}
