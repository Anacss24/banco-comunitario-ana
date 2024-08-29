import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { GerentesService } from '../services/gerentes.service';
import { Gerente } from '../entity/gerente.entity';

@Controller('gerentes')
export class GerentesController {
    constructor(private readonly gerenteService: GerentesService) { }

    @Post("criarGerente")
    createGerente(@Body() gerente: Gerente): Promise<Gerente> {
        return this.gerenteService.createGerente(gerente)
    }

    @Get()
    getAll() {
        return this.gerenteService.getAllGerentes()
    }

    @Get(":id")
    getById(@Param('id') id: string) {
        try {
            return this.gerenteService.getGerenteById(id)
        } catch (error) {
            throw new NotFoundException({ error: error.message })
        }
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: string) {
        return this.gerenteService.deleteGerente(id)
    }
}
