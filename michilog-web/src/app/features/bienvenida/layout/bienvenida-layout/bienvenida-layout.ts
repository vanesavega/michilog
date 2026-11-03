import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { Logo } from '../../../../shared/logo/logo';
import { BotonTema } from '../../../../core/tema/boton-tema/boton-tema';

@Component({
  imports: [RouterOutlet, Logo, BotonTema],
  selector: 'app-bienvenida-layout',
  templateUrl: './bienvenida-layout.html',
})
export class BienvenidaLayout {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  /** Se oculta en las rutas que declaran data: { conIlustracion: false } (p. ej. varios gatos). */
  protected readonly conIlustracion = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      startWith(null),
      map(() => this.route.firstChild?.snapshot.data['conIlustracion'] !== false),
    ),
    { initialValue: true },
  );
}