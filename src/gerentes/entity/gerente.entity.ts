import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm/decorator/entity/Entity"
import { Cliente } from "../../clientes/entity/cliente.entity"

@Entity()
export class Gerente{

    @PrimaryGeneratedColumn('uuid')
    public id: string

   @Column()
   public nomeCompleto: string 
  
   @OneToMany(() => Cliente, (cliente) => cliente.gerente)
   clientes: Cliente []

   constructor(id: string, nomeCompleto: string){
    this.nomeCompleto = nomeCompleto
   }
}


