import { TypeOrmModule } from "@nestjs/typeorm";
import { Gerente } from "./entity/gerente.entity";
import { GerentesController } from "./controllers/gerentes.controller";
import { GerentesService } from "./services/gerentes.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Gerente])],
    controllers: [GerentesController],
    providers: [GerentesService],
    exports: [TypeOrmModule]
})

export class GerenteModule { }