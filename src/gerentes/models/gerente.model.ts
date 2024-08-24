import { Cliente } from 'src/clientes/models/cliente.model';
import {v4 as uuidv4} from 'uuid';
import { ContaBancaria } from '../../contas/models/contaBancaria.model';


export class Gerente{

     id: string
    nomeCompleto: string;
    clientes: Cliente []

    constructor(nomeCompleto: string, cliente: Cliente ){
        this.id = uuidv4();
        this.nomeCompleto = nomeCompleto;  
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

    mudarTipoConta(cliente: Cliente, conta: ContaBancaria, novoTipo:'ContaCorrente'): void{
        cliente.mudarTipoConta(conta, novoTipo)
    }

}


