import { Injectable } from '@nestjs/common';
import { Cliente } from '../models/cliente.model';


@Injectable()
export class ClientesService {
    private _clientes: Cliente[] = [];

    createCliente(nome: string, endereco: string, telefone: string): Cliente {
        const newCliente = new Cliente(nome, endereco, telefone)
        this._clientes.push(newCliente)
        return newCliente;
    }

    gelAllClientes(): Cliente[] {
        return this._clientes;
    }

    getClienteById(id: string): Cliente {
        return this._clientes.find(cliente => cliente.id === id);    
    }

    deleteClienteById(id: string): void {
        this._clientes = this._clientes.filter((cliente) => cliente.id !== id);
    }
}
