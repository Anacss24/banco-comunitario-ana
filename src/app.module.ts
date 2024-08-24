import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './clientes/controllers/clientes.controller';
import { ContasController } from './contas/controllers/contas.controller';
import { GerentesService } from './gerentes/services/gerentes.service';
import { GerentesController } from './gerentes/controllers/gerentes.controller';
import { ContasService } from './contas/services/contas.service';
import { ClientesService } from './clientes/services/clientes.service';

@Module({
  imports: [],
  controllers: [AppController, ClientesController, ContasController, GerentesController],
  providers: [AppService, ClientesService, ContasService, GerentesService],
})
export class AppModule {}
