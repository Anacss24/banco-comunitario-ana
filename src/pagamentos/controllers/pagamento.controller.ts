import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { PagamentoService } from "../services/pagamento.service";
import { ContaBancaria } from "../../contas/models/contaBancaria.model";
import { Pagamento } from "../models/pagamento.model";

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