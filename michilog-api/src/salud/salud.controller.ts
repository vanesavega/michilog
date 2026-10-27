import { Controller, Get } from '@nestjs/common';
import type { RespuestaSalud } from './salud.interface';

@Controller('salud')
export class SaludController {

    @Get()
    obtenerEstado(): RespuestaSalud {
        return {estado: 'ok'}
    }
}
