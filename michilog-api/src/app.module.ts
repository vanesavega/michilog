import { Module } from '@nestjs/common';
import { GatosModule } from './gatos/gatos.module';
import { RegistrosModule } from './registros/registros.module';
import { SaludModule } from './salud/salud.module';

@Module({
  imports: [GatosModule, RegistrosModule, SaludModule],
})
export class AppModule {}
