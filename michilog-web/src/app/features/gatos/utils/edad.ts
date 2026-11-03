/** Recibe 'YYYY', 'YYYY-MM' o 'YYYY-MM-DD' y devuelve la edad con la precisión disponible. */
export function calcularEdad(nacimiento: string): string {
    const hoy = new Date();
    const [anio, mes = 1, dia = 1] = nacimiento.split('-').map(Number);
    let meses = (hoy.getFullYear() - anio) * 12 + (hoy.getMonth() + 1 - mes);
    if (hoy.getDate() < dia) meses -= 1;

    if (meses < 1) return 'menos de un mes';
    if (meses < 12) return meses === 1 ? '1 mes' : `${meses} meses`;

    const anios = Math.floor(meses / 12);
    return anios === 1 ? '1 año' : `${anios} años`;
}

/** Edad en texto a partir de la fecha de nacimiento o, si no existe, de la edad en años. */
export function textoEdad(nacimiento: string | null, edad: number | null): string | null {
    if (nacimiento) return calcularEdad(nacimiento);
    if (edad === null) return null;
    return edad === 1 ? '1 año' : `${edad} años`;
}