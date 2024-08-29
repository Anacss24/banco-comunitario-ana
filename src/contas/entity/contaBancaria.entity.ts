import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {  TipoConta } from './../enum/TipoConta.enum';
import { IsEnum } from 'class-validator';
import { Cliente } from '../../clientes/entity/cliente.entity';

@Entity('contas')
export class ContaBancaria {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    saldo: number

    @IsEnum(TipoConta)
    tipo: TipoConta;

    @OneToOne(() => Cliente, (cliente) => cliente.contaBancaria)
    cliente: Cliente;

    constructor(saldo: number, tipo: TipoConta){
        this.saldo = saldo;
        this.tipo = TipoConta.ContaCorrente || TipoConta.ContaPoupanca;
    }
}


