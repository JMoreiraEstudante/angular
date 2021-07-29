export class Produto {
    constructor(
        public codigo : number,
        public descricao: string,
        public valor_unitario:number,
        public desconto:number,
        public quantidade_vendida:number,
        public valor_final:number
    ){
    }
}
