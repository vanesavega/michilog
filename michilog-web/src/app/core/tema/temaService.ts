import { computed, DOCUMENT, effect, inject, Service, signal } from '@angular/core';

const CLAVE_TEMA = 'michilog:tema';
export type Tema = 'claro' | 'oscuro';

export function esTema(valor: string | null): valor is Tema {
  return valor === 'claro' || valor === 'oscuro';
}

@Service()
export class TemaService {
  private document = inject(DOCUMENT);

  private readonly _tema = signal<Tema>(this.leerTemaGuardado());
  readonly tema = this._tema.asReadonly();
  readonly esOscuro = computed(() => this._tema() === 'oscuro');

  constructor(){
    effect(() => {
      const tema = this._tema();
      this.document.documentElement.classList.toggle('dark', tema === 'oscuro');
      localStorage.setItem(CLAVE_TEMA, tema)
    })
  }

  alternar(): void {
    this._tema.update(actual => (actual === 'oscuro' ? 'claro' : 'oscuro'));
  }

  establecer(tema : Tema): void{
    this._tema.set(tema);
  }

  private leerTemaGuardado() : Tema {
    const guardado = localStorage.getItem(CLAVE_TEMA);
    return esTema(guardado) ? guardado : 'claro';
  }
}