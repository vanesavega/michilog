import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BienvenidaStore } from '../bienvenida.store';

export const conCantidadGuard: CanActivateFn = () => {
  const store = inject(BienvenidaStore);
  return store.cantidad() > 0 ? true : inject(Router).createUrlTree(['/bienvenida/cantidad']);
};
