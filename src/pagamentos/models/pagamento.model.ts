export interface Pagamento {
    valor: number
    pagar(valor: number): void
}

 class Pix implements Pagamento {
    
    pix: string;

    constructor(pix: string){
        this.pix = pix
        
    }
     valor: number;
    

    pagar(valor:number){
      console.log(`Pagamento processando no valor de ${valor} via PIX`)
    }
}

 class Boleto implements Pagamento {
    boleto: string

    constructor(boleto: string){
        this.boleto = boleto
    }
    valor: number;

    pagar(valor:number){
        console.log(`Pagamento processando no valor de ${valor} via boleto`)
    }
}

 export class ProcessoDePagamento  {
    criarProcesso(tipo: 'Pix' | 'Boleto', transferencia: string) : Pagamento {
    
        if (tipo == 'Pix'){
            return new Pix(transferencia)
        } else if (tipo == 'Boleto'){
            return new Boleto(transferencia)
        } else {
            throw new Error('Metódo de Pagamento Inválido')
        }
        
    }
}


