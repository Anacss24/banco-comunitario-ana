
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContaBancaria } from "../../contas/entity/contaBancaria.entity";
import { Gerente } from "../../gerentes/entity/gerente.entity";

@Entity('clientes')
export class Cliente {

  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public nomeCompleto: string

  @Column({unique: true})
  public endereco: string

  
  @Column()
  public telefone: string
 

  //@OneToOne indica que há uma relação de um para um, um cliente pode ter apenas uma conta
  @OneToOne(() => ContaBancaria, (contaBancaria) => contaBancaria.cliente, {
    onDelete: 'CASCADE'
  })

  @JoinColumn()  // Especifica que a chave estrangeira está nesta entidade
    contaBancaria: ContaBancaria;
  
  @ManyToOne(() => Gerente, (gerente) => gerente.clientes, {
     onDelete: 'SET NULL'
  })

  gerente: Gerente;
    

  constructor(
    id: string,
    nomeCompleto: string,
    endereco: string,
    telefone: string,
  
  ){
    this.nomeCompleto = nomeCompleto;
    this.endereco = endereco;
    this.telefone = telefone

    if(!id){
      this.id =id;
    }
  }

}


