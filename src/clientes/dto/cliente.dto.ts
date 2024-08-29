
import { ContaBancaria } from "../../contas/entity/contaBancaria.entity";
import { Gerente } from "../../gerentes/entity/gerente.entity";

export class CreateClienteDto {
    id: string;
    nomeCompleto: string;
    endereco: string;
    telefone: string;
    contas?: ContaBancaria [];
    gerente?: Gerente;
}

export class UpdateClienteDto {
    id: string;
    nomeCompleto: string;
    endereco: string;
    telefone: string;
    contas: ContaBancaria [];
    gerente: Gerente;
}