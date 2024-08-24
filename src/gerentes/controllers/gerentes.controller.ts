import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Cliente } from 'src/clientes/models/cliente.model';
import { GerentesService } from '../services/gerentes.service';

@Controller('gerentes')
export class GerentesController {
    constructor(private readonly gerenteService: GerentesService){}

    @Post("criarGerente")
    createGerente(@Body() body: {nomeCompleto: string, cliente: Cliente}){
        const gerente = this.gerenteService.createGerente(body.nomeCompleto, body.cliente)
        return{
            statusCode: HttpStatus.CREATED,
            message: 'Gerente criado com sucesso',
            data: gerente    
        }
    }
    @Get()
    getAll(){
        const gerentes = this.gerenteService.getAllGerentes();
        return{
            statusCode: HttpStatus.CREATED,
            message: 'Todos os gerentes retornados com sucesso',
            data: gerentes   
        }
    }
    @Get(":id")
    getById(@Param('id') id: string){
        const gerente = this.gerenteService.getGerenteByClienteId(id);
        if(!gerente){
            throw new HttpException('Gerente não encontrado',
                HttpStatus.NOT_FOUND)
        }

        return{
            statusCode: HttpStatus.OK,
            message: 'Gerente retornado com sucesso',
             data: gerente
        }
    }
}
