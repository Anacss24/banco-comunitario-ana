import { Cliente } from "../../clientes/models/cliente.model";
import { ContaBancaria } from "./contaBancaria.model";

export class ContaCorrente extends ContaBancaria {
    chequeEspecial: number;

    constructor(saldo: number, tipo: string, cliente: Cliente, chequeEspecial: number) {
        super(saldo, 'corrente', cliente)
        this.chequeEspecial = chequeEspecial
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error('Valor do saque deve ser positivo');
        }
        if (valor > this.saldo + this.chequeEspecial) {
            throw new Error('Saldo insuficiente');
        }
        this.saldo -= valor;
        if (this.saldo < 0) {
            this.chequeEspecial += Math.abs(this.saldo);
            this.saldo = 0;
        }
    }
}