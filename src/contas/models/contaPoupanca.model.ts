import { Cliente } from "../../clientes/models/cliente.model";
import { ContaBancaria } from "./contaBancaria.model";

export class ContaPoupanca extends ContaBancaria {
    taxaJuros: number;

    constructor(saldo: number, tipo: string, cliente: Cliente, taxaJuros: number) {
        super(saldo, 'poupanca', cliente)
        this.taxaJuros = taxaJuros;
    }

    calcularTaxa(): number {
        return this.saldo * this.taxaJuros / 100;
    }

    transferir(destino: ContaBancaria, valor: number): void {
        super.transferir(destino, valor);
        this.saldo += this.calcularTaxa();
    }

}

