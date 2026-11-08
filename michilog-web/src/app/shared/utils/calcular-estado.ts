import { NivelEstado } from '../models/estado-gato.model';
import { Registro } from '../models/registro.model';

/** Registros que cuentan como señal de malestar. */
const TIPOS_DE_ALERTA = ['vomito', 'sintoma'];

/** Estado del día a partir de los registros de hoy de un gato. */
export function calcularEstado(registrosDeHoy: Registro[]): NivelEstado {
  if (registrosDeHoy.length === 0) return 'sin-registros';
  const alertas = registrosDeHoy.filter((r) => TIPOS_DE_ALERTA.includes(r.tipo)).length;
  if (alertas >= 2) return 'revisar';
  if (alertas === 1) return 'vigilar';
  return 'normal';
}
