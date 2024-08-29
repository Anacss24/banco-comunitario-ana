import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { PagamentoService } from "../services/pagamento.service";
import { ContaBancaria } from "../../contas/entity/contaBancaria.entity";
import { Pagamento } from "../entity/pagamento.entity";

@Controller('pagamento')
export class PagamentoController{

    constructor(private readonly pagamentoService: PagamentoService ){}

    @Post()
    realizarPagamento(@Body() body: {conta: ContaBancaria, pagamento: Pagamento}){
        const conta = this.pagamentoService.realizarPagamento(body.conta, body.pagamento )
        return{
            statusCode: HttpStatus.OK,
            message: 'Pagamento Realizado com sucesso',
            data: conta     
        }
    }
}