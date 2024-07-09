import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesService } from './clientes/clientes.service';
import { ClientesController } from './clientes/clientes.controller';
import { ContasService } from './contas/contas.service';
import { ContasController } from './contas/contas.controller';
import { GerentesService } from './gerentes/gerentes.service';
import { GerentesController } from './gerentes/gerentes.controller';

@Module({
  imports: [],
  controllers: [AppController, ClientesController, ContasController, GerentesController],
  providers: [AppService, ClientesService, ContasService, GerentesService],
})
export class AppModule {}
