import { Cliente } from "../../clientes/entity/cliente.entity";

export class CreateGerenteDto {
    id: string;
    nomeCompleto: string;
    clientes: Cliente []
   
}

export class UpdateGerenteDto {
    id: string;
    nomeCompleto: string
    clientes: Cliente []
    
}

