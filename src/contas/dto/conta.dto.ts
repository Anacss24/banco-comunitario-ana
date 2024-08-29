import { Cliente } from "../../clientes/entity/cliente.entity";
import { TipoConta } from "../enum/TipoConta.enum";



export class CreateContaBancariaDto {
    id: string;
    saldo: number;
    tipo: TipoConta;
    cliente: Cliente [];
}

export class UpdateContaBancariaDto {
    saldo: number;
    tipo: TipoConta;
    cliente: Cliente;
}


