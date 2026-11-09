import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { format, isToday, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { HojaInferior } from '../../../../shared/components/hoja-inferior/hoja-inferior';
import { CampoEditable, TipoRegistro } from '../../../../shared/models/registro.model';
import { NIVELES_ESTADO } from '../../../../shared/models/niveles-estado';
import { TIPOS_REGISTRO } from '../../../../shared/models/tipos-registro';
import { EstadosStore } from '../../../../shared/stores/estados.store';
import { GatosStore } from '../../../../shared/stores/gatos.store';
import { RegistrosStore } from '../../../../shared/stores/registros.store';
import { BotonesAnotar } from '../../components/botones-anotar/botones-anotar';
import { EditarRegistro } from '../../components/editar-registro/editar-registro';
import { ListaRegistros } from '../../components/lista-registros/lista-registros';
import { SelectorGatos } from '../../components/selector-gatos/selector-gatos';
import { TarjetaGatoHoy } from '../../components/tarjeta-gato-hoy/tarjeta-gato-hoy';

/** Desde esta cantidad de gatos la fila deslizable pasa a ser un desplegable. */
const MAX_GATOS_EN_FILA = 8;

@Component({
  imports: [SelectorGatos, TarjetaGatoHoy, BotonesAnotar, ListaRegistros, HojaInferior, EditarRegistro],
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

  /** Registro que se está editando en la hoja. */
  private readonly editandoId = signal<string | null>(null);
  protected readonly registroEditando = computed(
    () => this.registrosStore.registros().find((r) => r.id === this.editandoId()) ?? null,
  );
  private readonly editandoCampo = signal<CampoEditable>('hora');
  protected readonly campoEditando = this.editandoCampo.asReadonly();
  protected readonly tituloHoja = computed(() => (this.editandoCampo() === 'hora' ? 'Cambiar hora' : 'Nota'));
  private readonly hoja = viewChild<HojaInferior>('hoja');

  /** El último registro creado con un toque: es el que abre el doble toque. */
  private ultimoRegistroId: string | null = null;

  protected anotar(tipo: TipoRegistro): void {
    const gato = this.gatosStore.seleccionado();
    if (gato) this.ultimoRegistroId = this.registrosStore.anotar(gato.id, tipo).id;
  }

  protected detallar(): void {
    if (this.ultimoRegistroId) this.editar(this.ultimoRegistroId, 'hora');
  }

  protected editar(id: string, campo: CampoEditable): void {
    this.editandoId.set(id);
    this.editandoCampo.set(campo);
    this.hoja()?.abrir();
  }

  protected cerrarHoja(): void {
    this.hoja()?.cerrar();
  }

  protected hojaCerrada(): void {
    this.editandoId.set(null);
  }

  protected verPerfil(id: string): void {
    this.router.navigate(['/gatos', id]);
  }
}
