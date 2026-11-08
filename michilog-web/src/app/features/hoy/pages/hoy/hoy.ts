import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { format, isToday, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { TipoRegistro } from '../../../../shared/models/registro.model';
import { NIVELES_ESTADO } from '../../../../shared/models/niveles-estado';
import { TIPOS_REGISTRO } from '../../../../shared/models/tipos-registro';
import { EstadosStore } from '../../../../shared/stores/estados.store';
import { GatosStore } from '../../../../shared/stores/gatos.store';
import { RegistrosStore } from '../../../../shared/stores/registros.store';
import { BotonesAnotar } from '../../components/botones-anotar/botones-anotar';
import { ListaRegistros } from '../../components/lista-registros/lista-registros';
import { SelectorGatos } from '../../components/selector-gatos/selector-gatos';
import { TarjetaGatoHoy } from '../../components/tarjeta-gato-hoy/tarjeta-gato-hoy';

/** Desde esta cantidad de gatos la fila deslizable pasa a ser un desplegable. */
const MAX_GATOS_EN_FILA = 8;

@Component({
  imports: [SelectorGatos, TarjetaGatoHoy, BotonesAnotar, ListaRegistros],
  selector: 'app-hoy',
  templateUrl: './hoy.html',
})
export class Hoy {
  protected readonly gatosStore = inject(GatosStore);
  private readonly registrosStore = inject(RegistrosStore);
  private readonly estadosStore = inject(EstadosStore);
  private readonly router = inject(Router);

  protected readonly tipos = TIPOS_REGISTRO;
  protected readonly estado = computed(() => {
    const gato = this.gatosStore.seleccionado();
    return NIVELES_ESTADO[(gato && this.estadosStore.porGato()[gato.id]) ?? 'sin-registros'];
  });
  protected readonly fecha = format(new Date(), "EEEE, d 'de' MMMM", { locale: es });
  protected readonly variosGatos = computed(() => this.gatosStore.total() > 1);
  protected readonly muchosGatos = computed(() => this.gatosStore.total() > MAX_GATOS_EN_FILA);

  /** Registros de hoy del gato elegido, del más reciente al más antiguo. */
  protected readonly registrosDeHoy = computed(() => {
    const gato = this.gatosStore.seleccionado();
    return this.registrosStore
      .registros()
      .filter((r) => r.gatoId === gato?.id && isToday(parseISO(r.fecha)))
      .sort((a, b) => b.fecha.localeCompare(a.fecha));
  });

  protected anotar(tipo: TipoRegistro): void {
    const gato = this.gatosStore.seleccionado();
    if (gato) this.registrosStore.anotar(gato.id, tipo);
  }

  protected verPerfil(id: string): void {
    this.router.navigate(['/gatos', id]);
  }
}
