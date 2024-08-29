import { ContaBancaria } from '../../contas/entity/contaBancaria.entity';
import { Injectable } from "@nestjs/common";
import { Pagamento, ProcessoDePagamento } from "../entity/pagamento.entity";

@Injectable()
export class PagamentoService {
    pagamento: Pagamento [] = [];

    realizarPagamento(conta: ContaBancaria, pagamento: Pagamento): void {
        if(pagamento.valor < conta.saldo){
           throw new Error("Saldo inválido")
        } else {
            console.log('Transação efetuada com sucesso')
        }
    }
   
}
