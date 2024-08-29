
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';



@Injectable()
export class ClientesService {

    constructor(@InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>

    ) { }

    async createCliente(cliente: Cliente): Promise<Cliente> {
        return await this.clienteRepository.save(cliente)
    }

    async getClienteAll(): Promise<Cliente[]> {
        return await this.clienteRepository.find({
            relations:{
                contaBancaria: true,
                gerente: true
            }
        })
    }

    async getClienteById(id: string): Promise<Cliente> {
        return await this.clienteRepository.findOne({
            where: { id },
            relations:{
                contaBancaria: true,
                gerente: true
            }
        })
    }

    async updateCliente(cliente: Cliente): Promise<Cliente> {
        let procurarCliente = await this.getClienteById(cliente.id)

        if(!procurarCliente || !cliente.id) {

            throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND)

        }

        return this.clienteRepository.save(cliente)
    }



    async deleteClienteById(id: string): Promise<DeleteResult> {
        let procurarCliente = await this.getClienteById(id)

        if (!procurarCliente) {
            throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND)

        }

        return this.clienteRepository.delete(id)
    }
}
