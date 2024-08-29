import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "./entity/cliente.entity";
import { ClientesService } from "./services/clientes.service";
import { ClientesController } from "./controllers/clientes.controller";
import { Module } from "@nestjs/common";

@Module({
    imports:[TypeOrmModule.forFeature([Cliente])],
    providers: [ClientesService],
    controllers: [ClientesController],
    exports:[TypeOrmModule]
})

export class ClienteModule {}