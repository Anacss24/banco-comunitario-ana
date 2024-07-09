import { Injectable } from '@nestjs/common';
import { ContaBancaria } from './contaBancaria.model';
import { Cliente } from 'src/clientes/cliente.model';
import { Gerente } from 'src/gerentes/gerente.model';

@Injectable()
export class ContasService {
    private _contas: ContaBancaria [] = [];
   

    createConta(saldo: number, tipo: string, cliente: Cliente): ContaBancaria {
        const newConta = new ContaBancaria(saldo, tipo, cliente);
        this._contas.push(newConta);
        return newConta;
    }

    getAllContas(): ContaBancaria [] {
        return this._contas;
    }

    getContaById(id: string): ContaBancaria | undefined {
        return this._contas.find(conta => conta.cliente.id === id);
    }

    deleteContaById(id: string): void {
        this._contas = this._contas.filter(conta => conta.cliente.id !== id)
    }

}
