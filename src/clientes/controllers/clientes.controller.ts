import { UpdateClienteDto } from './../dto/cliente.dto';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../entity/cliente.entity';


@Controller('clientes')
export class ClientesController {
    constructor(private readonly clienteService: ClientesService) {}

    @Post("criarCliente")
    createCliente(@Body() cliente: Cliente ): Promise<Cliente> {
        return this.clienteService.createCliente(cliente)
    }

    @Get()
    getClienteAll() {
       return this.clienteService.getClienteAll()
    }
    

    @Get(':id')
    getById(@Param('id') id: string) {
        try {

            return this.clienteService.getClienteById(id)

        } catch(error) {
            throw new NotFoundException({error: error.message})

        }
    }

    @Post()
    updateCliente(@Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.updateCliente(cliente)
    }


    @Delete(':id')
    deleteClienteById(@Param('id') id: string){
        return this.clienteService.deleteClienteById(id)
    }

}
