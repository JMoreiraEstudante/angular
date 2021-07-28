import { Byte } from "@angular/compiler/src/util";

export interface Imovel {
    codigo: number;
    tipo: string;
    descricao: string;
    nomeVendedor: string;
    preco: number;
    imagem: Byte;
    data: Date;
}