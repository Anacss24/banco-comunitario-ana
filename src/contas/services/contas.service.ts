import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/clientes/models/cliente.model';
import { ContaBancaria } from '../models/contaBancaria.model';

@Injectable()
export class ContasService {
    contas: ContaBancaria [] = [];
   

    createConta(saldo: number, tipo: string, cliente: Cliente): ContaBancaria {
        const newConta = new ContaBancaria(saldo, tipo, cliente);
        this.contas.push(newConta);
        return newConta;
    }

    getAllContas(): ContaBancaria [] {
        return this.contas;
    }

    getContaById(id: string): ContaBancaria | undefined {
        return this.contas.find(conta => conta.cliente.id === id);
    }

    deleteContaById(id: string): void {
        this.contas = this.contas.filter(conta => conta.cliente.id !== id)
    }

}
