import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { ContaBancaria } from '../entity/contaBancaria.entity';
import { ContaBancariaService } from '../services/contas.service';

@Controller('contas')
export class ContaBancariaController {
    constructor(private readonly contaService: ContaBancariaService) { }

    @Post("criarConta")
    createConta(@Body() contaBancaria: ContaBancaria): Promise<ContaBancaria> {
        return this.contaService.createConta(contaBancaria)

    }

    @Get()
    getAll() {
        return this.contaService.getAllContas()
    }

    @Get(":id")
    getById(@Param('id') id: string) {
        try {
            return this.contaService.getContaById(id)
        } catch (error) {
            throw new NotFoundException({ error: error.message })
        }
    }


    @Delete(':id')
    deleteContaById(@Param('id') id: string) {
        return this.contaService.deleteContaById(id)
    }
}
