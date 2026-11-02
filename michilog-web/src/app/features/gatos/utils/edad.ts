export function calcularEdad(fechaNacimiento: string): string{
    const hoy : Date = new Date();
    const [anio, mes ] = fechaNacimiento.split('-').map(Number);
    const meses = (hoy.getFullYear() - anio) * 12 + (hoy.getMonth() + 1 - mes);
    if (meses < 1) return 'menos de un mes';
    if (meses > 12) return meses === 1 ? '1 Mes' : `${meses} Meses`

    const anios = Math.floor(meses/12);
    return anios === 1 ? '1 Año' : `${anio} Años`;
}