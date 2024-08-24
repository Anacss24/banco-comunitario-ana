import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ClientesService } from '../services/clientes.service';


@Controller('clientes')
export class ClientesController {
    constructor(private readonly clienteService: ClientesService) {}

    @Post("criarCliente")
    createCliente(@Body() body: { nome: string, endereco: string, telefone: string }) {
        const cliente = this.clienteService.createCliente(body.nome, body.endereco, body.telefone)
        return {
            statusCode: HttpStatus.CREATED,
            message: 'Cliente criado com sucesso',
            data: cliente
        }
    }

    @Get()
    getAll() {
        const clientes = this.clienteService.gelAllClientes();
        return {
            statusCode: HttpStatus.OK,
            message: 'Todos os clientes retornados com sucesso',
            data: clientes
        }
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        const cliente = this.clienteService.getClienteById(id);
        if (!cliente) {
            throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND)
        }

        return {
            statusCode: HttpStatus.OK,
            message: 'Todos os clientes retornados com sucesso',
            data: cliente
        }
    }
    @Delete(':id')
    deleteClienteById(@Param('id') id: string){
        this.clienteService.deleteClienteById(id);
        return{
            statusCode: HttpStatus.NO_CONTENT,
            message: 'Cliente deletado com sucesso'
        }
    }

}
