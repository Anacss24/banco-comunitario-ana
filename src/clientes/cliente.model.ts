import { Gerente } from 'src/gerentes/gerente.model';
import { ContaBancaria } from '../contas/contaBancaria.model';
import {v4 as uuidv4} from 'uuid';

export class Cliente{
   id: string;
   private _nomeCompleto: string;
   private _endereco: string;
   private _telefone: string;
    _contas: ContaBancaria [];
   private _gerente: Gerente;

	constructor(nome: string, endereco: string, telefone: string){
        this.id = uuidv4();
        this._nomeCompleto = nome;
        this._endereco = endereco;
        this._telefone = telefone;
    }



    abrirConta(conta: ContaBancaria): void {
        this._contas.push(conta);
    }
    
    fecharConta(conta: ContaBancaria): void {
        this._contas = this._contas.filter((c) => c !== conta);
    }

    mudarTipoConta(conta: ContaBancaria, novoTipo: string): void {
        const contaIndex = this._contas.findIndex((c) => c === conta);
        if (contaIndex >= 0) {
          this._contas[contaIndex].tipo = novoTipo;
        }
      }
}

