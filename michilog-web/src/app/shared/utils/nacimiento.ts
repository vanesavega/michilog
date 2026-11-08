import { format, isExists, isFuture } from 'date-fns';
import { es } from 'date-fns/locale';

export interface PartesNacimiento {
  anio: number | null;
  mes: number | null;
  dia: number | null;
}

const ANIO_MINIMO = 1980;

/** 'YYYY' | 'YYYY-MM' | 'YYYY-MM-DD' → partes sueltas para el formulario. */
export function partirNacimiento(nacimiento: string | null): PartesNacimiento {
  if (!nacimiento) return { anio: null, mes: null, dia: null };
  const [anio, mes, dia] = nacimiento.split('-').map(Number);
  return { anio, mes: mes ?? null, dia: dia ?? null };
}

/** Partes del formulario → texto con la precisión que haya. Sin año no hay fecha. */
export function armarNacimiento({ anio, mes, dia }: PartesNacimiento): string | null {
  if (anio === null) return null;
  if (mes === null) return String(anio);
  const mm = String(mes).padStart(2, '0');
  return dia === null ? `${anio}-${mm}` : `${anio}-${mm}-${String(dia).padStart(2, '0')}`;
}

/** Texto para mostrar: "2021", "marzo de 2021" o "14 de marzo de 2021". */
export function textoNacimiento(nacimiento: string): string {
  const { anio, mes, dia } = partirNacimiento(nacimiento);
  const fecha = new Date(anio!, (mes ?? 1) - 1, dia ?? 1);
  const patron = mes === null ? 'yyyy' : dia === null ? "MMMM 'de' yyyy" : "d 'de' MMMM 'de' yyyy";
  return format(fecha, patron, { locale: es });
}

/** Devuelve el texto del error o null si la fecha está bien. La edad (si hay) debe coincidir con el año. */
export function validarNacimiento({ anio, mes, dia }: PartesNacimiento, edad: number | null): string | null {
  if (mes !== null && anio === null) return 'Falta el año';
  if (dia !== null && mes === null) return 'Falta el mes';
  if (anio === null) return null;
  if (anio < ANIO_MINIMO) return 'Revisa el año';
  if (dia !== null && !isExists(anio, (mes ?? 1) - 1, dia)) return 'Ese día no existe en ese mes';
  if (isFuture(new Date(anio, (mes ?? 1) - 1, dia ?? 1))) return 'La fecha no puede ser futura';

  const actual = new Date().getFullYear();
  if (edad !== null && (anio > actual - edad || anio < actual - edad - 1)) {
    return `No coincide con la edad indicada (${edad})`;
  }
  return null;
}
