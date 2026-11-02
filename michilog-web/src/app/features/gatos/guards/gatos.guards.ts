import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { GatosStore } from "../gatos.store";

export const conGatosGuard : CanActivateFn = () => {
    const store = inject(GatosStore);
    return store.total() > 0 ? true : inject(Router).createUrlTree(['/bienvenida']);
};

export const sinGatosGuard : CanActivateFn = () => {
    const store = inject(GatosStore);
    return store.total() === 0 ? true : inject(Router).createUrlTree(['/hoy']);
};