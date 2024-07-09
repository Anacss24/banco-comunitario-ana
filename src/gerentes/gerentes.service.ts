import { Injectable } from '@nestjs/common';
import { Gerente } from './gerente.model';
import { Cliente } from 'src/clientes/cliente.model';

@Injectable()
export class GerentesService {
    private _gerentes: Gerente [] = [];

    createGerente(nomeCompleto: string, cliente: Cliente): Gerente {
        const newGerente = new Gerente(nomeCompleto, cliente);
        this._gerentes.push(newGerente);
        return newGerente;
    }

    getAllGerentes(): Gerente [] {
        return this._gerentes;

    }

    getGerenteByClienteId(id: string): Gerente | undefined {
        return this._gerentes.find(gerente => 
            gerente.clientes.some(cliente => cliente.id === id)
        );
    }

    
}
