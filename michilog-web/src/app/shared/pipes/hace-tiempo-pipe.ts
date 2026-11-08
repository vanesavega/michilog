import { Pipe, PipeTransform } from '@angular/core';
import { haceTiempo } from '../utils/hace-tiempo';

@Pipe({ name: 'haceTiempo' })
export class HaceTiempoPipe implements PipeTransform {
  transform(fecha: string): string {
    return haceTiempo(fecha);
  }
}
