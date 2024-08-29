import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cliente } from '../../clientes/entity/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ContaBancaria} from '../entity/contaBancaria.entity';
import { DeleteResult, Repository } from 'typeorm';


@Injectable()
export class ContaBancariaService {

   constructor(@InjectRepository(ContaBancaria)
   private contasRepository: Repository<ContaBancaria>

    ){}
   

     async createConta(contas: ContaBancaria): Promise<ContaBancaria> {
        return await this.contasRepository.save(contas)
    }

     async getAllContas(): Promise<ContaBancaria[]> {
        return await this.contasRepository.find({
            relations:{
                cliente: true
            }
        })
    }

     async getContaById(id: string): Promise<ContaBancaria> {
        return await this.contasRepository.findOne({
            where:{id},
            relations:{
                cliente: true
            }
        })
    }

     async deleteContaById(id: string): Promise<DeleteResult> {
       let buscarConta = await this.getContaById(id)

       if(!buscarConta){
            throw new HttpException('Conta não encontrada', HttpStatus.NOT_FOUND)
       }

       return this.contasRepository.delete(id)
    }

}
