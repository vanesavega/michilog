import { format, isToday, isYesterday, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Registro } from '../models/registro.model';

export interface GrupoDia {
  /** Día en formato yyyy-MM-dd; sirve de identificador del grupo. */
  dia: string;
  /** "Hoy", "Ayer" o la fecha larga. */
  titulo: string;
  registros: Registro[];
}

function tituloDelDia(fecha: Date): string {
  if (isToday(fecha)) return 'Hoy';
  if (isYesterday(fecha)) return 'Ayer';
  return format(fecha, "EEEE d 'de' MMMM", { locale: es });
}

/** Agrupa los registros por día, del día más reciente al más antiguo y, dentro de cada día, del más reciente al más antiguo. */
export function agruparPorDia(registros: Registro[]): GrupoDia[] {
  const ordenados = [...registros].sort((a, b) => b.fecha.localeCompare(a.fecha));
  const grupos: GrupoDia[] = [];
  for (const registro of ordenados) {
    const fecha = parseISO(registro.fecha);
    const dia = format(fecha, 'yyyy-MM-dd');
    const ultimo = grupos.at(-1);
    if (ultimo?.dia === dia) ultimo.registros.push(registro);
    else grupos.push({ dia, titulo: tituloDelDia(fecha), registros: [registro] });
  }
  return grupos;
}
