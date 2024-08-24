import { Cliente } from "src/clientes/models/cliente.model";


export class ContaBancaria {
    saldo: number;
    tipo: 'ContaCorrente' | 'ContaPoupanca';
    cliente: Cliente;

    constructor(saldo: number, tipo: string, cliente: Cliente) {
        this.saldo = saldo;
        this.tipo = 'ContaCorrente';
    
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error('Valor do depósito deve ser positivo');
        }
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error('Valor do saque deve ser positivo');
        }
        if (valor > this.saldo) {
            throw new Error('Saldo insuficiente');
        }
        this.saldo -= valor;
    }

    transferir(destino: ContaBancaria, valor: number): void {
        if (valor <= 0) {
            throw new Error('Valor da transferência deve ser positivo');
        }

        if (valor > this.saldo) {
            throw new Error('Saldo insuficiente');
        }

        this.saldo -= valor;
        destino.saldo += valor;
    }

    verificarSaldo(): number {
        return this.saldo;
    }
}



