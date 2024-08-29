import { Module } from '@nestjs/common';
import { ContaBancaria } from './entity/contaBancaria.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContaBancariaService } from './services/contas.service';
import { ContaBancariaController } from './controllers/contas.controller';


@Module({
    imports: [TypeOrmModule.forFeature([ContaBancaria])],
    providers: [ContaBancariaService],
    controllers: [ContaBancariaController],
    exports:[TypeOrmModule]
})

export class ContaBancariaModule {}