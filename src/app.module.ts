import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './clientes/controllers/clientes.controller';
import { GerentesService } from './gerentes/services/gerentes.service';
import { GerentesController } from './gerentes/controllers/gerentes.controller';
import { ClientesService } from './clientes/services/clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes/entity/cliente.entity';
import { ClienteModule } from './clientes/cliente.module';
import { ContaBancaria } from './contas/entity/contaBancaria.entity';
import { ContaBancariaModule } from './contas/contas.module';
import { ContaBancariaController } from './contas/controllers/contas.controller';
import { ContaBancariaService } from './contas/services/contas.service';
import { Gerente } from './gerentes/entity/gerente.entity';
import { GerenteModule } from './gerentes/gerente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port: 5432,
      database: 'db_banco_comunitario',
      username: 'postgres',
      password: 'root',
      entities: [Cliente, ContaBancaria, Gerente],
      synchronize: true,

    }),
    ClienteModule,
    ContaBancariaModule,
    GerenteModule,
    
  ],
  controllers: [AppController, ClientesController, ContaBancariaController, GerentesController],
  providers: [AppService, ClientesService, ContaBancariaService, GerentesService],
})
export class AppModule {}
