import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ContasService } from './contas.service';
import { Cliente } from 'src/clientes/cliente.model';

@Controller('contas')
export class ContasController {
    constructor(private readonly contaService: ContasService ){}

    @Post("criarConta")
    createConta(@Body() body: {saldo: number, tipo: string, cliente: Cliente}){
        const conta = this.contaService.createConta(body.saldo, body.tipo, body.cliente)
        return{
            statusCode: HttpStatus.CREATED,
            message: 'Conta criada com sucesso',
            data: conta     
        }
    }

    @Get()
    getAll(){
        const contas = this.contaService.getAllContas();
        return{
            statusCode: HttpStatus.CREATED,
            message: 'Todas as contas retornadas com sucesso',
            data: contas     
        }
    }

    @Get(":id")
    getById(@Param('id') id: string){
        const conta = this.contaService.getContaById(id);
        if(!conta){
            throw new HttpException('Conta não encontrada',
                HttpStatus.NOT_FOUND)
        }

        return{
            statusCode: HttpStatus.OK,
            message: 'Conta retornada com sucesso',
             data: conta
        }
        }

        @Delete(':id')
        deleteContaById(@Param('id')id: string){
            this.contaService.deleteContaById(id);
            return{
                statusCode: HttpStatus.NO_CONTENT,
                message: 'Conta deletada com sucesso'
            }
    }
}
