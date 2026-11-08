import { differenceInDays, differenceInHours, differenceInMinutes, format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

/** Texto corto de cuánto pasó: "ahora", "hace 20 min", "hace 3 h", "hace 2 d" o, pasada una semana, la fecha ("4 nov"). */
export function haceTiempo(fecha: string, ahora: Date = new Date()): string {
  const momento = parseISO(fecha);
  const minutos = differenceInMinutes(ahora, momento);
  if (minutos < 1) return 'ahora';
  if (minutos < 60) return `hace ${minutos} min`;
  const horas = differenceInHours(ahora, momento);
  if (horas < 24) return `hace ${horas} h`;
  const dias = differenceInDays(ahora, momento);
  if (dias < 7) return `hace ${dias} d`;
  return format(momento, 'd MMM', { locale: es });
}
