import { HttpException, HttpStatus, Injectable } from '@nestjs/common';;
import { Cliente } from '../../clientes/entity/cliente.entity';
import { Gerente } from '../entity/gerente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class GerentesService {

    constructor(@InjectRepository(Gerente)
    private readonly gerenteRepository: Repository<Gerente>
    ) { }

    async createGerente(gerente: Gerente): Promise<Gerente> {
        return await this.gerenteRepository.save(gerente)
    }

    async getAllGerentes(): Promise<Gerente[]> {
        return await this.gerenteRepository.find({
            relations: {
                clientes: true
            }
        })

    }

    async getGerenteById(id: string): Promise<Gerente> {
        return await this.gerenteRepository.findOne({
            where: { id },
            relations: {
                clientes: true
            }
        })
    }

    async deleteGerente(id: string): Promise<DeleteResult> {
        let procurarGerente = await this.getGerenteById(id)

        if (!procurarGerente) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND)
        }

        return this.gerenteRepository.delete(id)
    }



}
