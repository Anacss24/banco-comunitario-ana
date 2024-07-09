import { Cliente } from "src/clientes/cliente.model";


export class ContaBancaria {
    saldo: number;
    tipo: string;
    cliente: Cliente;

    constructor(saldo: number, tipo: string, cliente: Cliente) {
        this.saldo = saldo;
        this.tipo = tipo;
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
