import { ContaBancaria } from '../../contas/models/contaBancaria.model';
import {v4 as uuidv4} from 'uuid';
import { Gerente } from '../../gerentes/models/gerente.model';

export class Cliente{
   id: string;
   nomeCompleto: string;
   endereco: string;
   telefone: string;
   contas: ContaBancaria [];
   gerente: Gerente;

	constructor(nome: string, endereco: string, telefone: string)
  {
        this.id = uuidv4();
        this.nomeCompleto = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    abrirConta(conta: ContaBancaria): void {
        this.contas.push(conta);
    }
    
    fecharConta(conta: ContaBancaria): void {
        this.contas = this.contas.filter((c) => c !== conta);
    }

    mudarTipoConta(conta: ContaBancaria, novoTipo: 'ContaCorrente'): void {
        const contaIndex = this.contas.findIndex((c) => c === conta);
        if (contaIndex >= 0) {
          this.contas[contaIndex].tipo = novoTipo;
        }
      }
}

