import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { GatosStore } from "../../../shared/stores/gatos.store";

export const conGatosGuard : CanActivateFn = () => {
    const store = inject(GatosStore);
    return store.total() > 0 ? true : inject(Router).createUrlTree(['/bienvenida']);
};

export const sinGatosGuard : CanActivateFn = () => {
    const store = inject(GatosStore);
    return store.total() === 0 ? true : inject(Router).createUrlTree(['/hoy']);
};

export const gatoExisteGuard : CanActivateFn = (route) => {
    const existe = inject(GatosStore).porId(route.paramMap.get('id') ?? '');
    return existe ? true : inject(Router).createUrlTree(['/gatos']);
};
export const unSoloGatoGuard : CanActivateFn = () => {
    const store = inject(GatosStore);
    const [unico] = store.gatos();
    return store.total() === 1 ? inject(Router).createUrlTree(['/gatos', unico.id]) : true;
};
