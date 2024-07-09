import { Cliente } from 'src/clientes/cliente.model';
import {v4 as uuidv4} from 'uuid';
import { ContaBancaria } from "../contas/contaBancaria.model";

export class Gerente{

    private _id: string
    private _nomeCompleto: string;
    clientes: Cliente []

    constructor(nomeCompleto: string, cliente: Cliente ){
        this._id = uuidv4();
        this._nomeCompleto = nomeCompleto;  
    }
    
    adicionarCliente(cliente: Cliente): void{
       this.clientes.push(cliente);
    }

    removerCliente(cliente: Cliente): void{
        this.clientes = this.clientes.filter((item) => item.id !== cliente.id);
    }

    abrirConta(cliente: Cliente, tipoConta: string): void{
        if (tipoConta === tipoConta) {
            throw new Error(
              'Cliente não possui os requisitos para abrir conta corrente.',
            );
    }
}

    fecharConta(cliente: Cliente, conta: ContaBancaria): void{
       cliente.fecharConta(conta);
    }

    mudarTipoConta(cliente: Cliente, conta: ContaBancaria, novoTipo: string): void{
        cliente.mudarTipoConta(conta, novoTipo)
    }

}


