import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  constructor() { }
  produtosList: Produto[] =[];
  notaFiscal: Produto[] =[];
  produto1 = new Produto(23 , "Calça jogger" , 30 , 10 , 0 , 0)
  produto2 = new Produto(24 , "Bermuda jogger" , 25 , 10 , 0 , 0)
  produto3 = new Produto(25 , "Calça Nike" , 70 , 10 , 0 , 0)
  produto4 = new Produto(26 , "Camisa Polo" , 120 , 15 , 0, 0)
  produto5 = new Produto(27 , "Camisa Adidas" , 90 , 10 , 0 , 0)

  codigo = 0;
  descricao = '';
  desconto = 0;
  valorUnitario = 0;
  quantidade_vendida= '1';
  numero = 0;
  valor_final = 0;

  nome = '';
  ngOnInit(): void {
    this.listaPodutos();
  }
  listaPodutos():void{
    this.produtosList.push(this.produto1)
    this.produtosList.push(this.produto2)
    this.produtosList.push(this.produto3)
    this.produtosList.push(this.produto4)
    this.produtosList.push(this.produto5)
  }
  
  atualizarCampos(codigo:string):void{
    this.numero = parseInt(codigo);
    if(codigo != null){
      console.log("not null")
      this.produtosList.forEach((produto)=>{
        if(produto.codigo == this.numero){
          this.descricao = produto.descricao;
          this.desconto = produto.desconto;
          this.valorUnitario = produto.valor_unitario;
          this.codigo = produto.codigo;
          console.log(produto.descricao)
        }
      })
    }
  }
  vendido = false;
  comprarProduto(): void {
    this.vendido = false;
    this.produtosList.forEach((produto)=>{
        if(produto.codigo == this.codigo){
          if(this.quantidade_vendida == ""){
            this.quantidade_vendida = '1';
          }
          produto.quantidade_vendida = produto.quantidade_vendida+ parseInt(this.quantidade_vendida)
          produto.valor_final= (produto.valor_unitario - (produto.valor_unitario * produto.desconto / 100)) * produto.quantidade_vendida;
          this.notaFiscal.forEach((produtoVendido)=>{
            if(produtoVendido.codigo == produto.codigo){
              this.vendido = true
            }
          })
          if(!this.vendido){
            this.notaFiscal.push(produto)
          }
        }
    })
  }
  total = 0;
  fecharNota():void{
    this.total = 0;
    this.notaFiscal.forEach((produto)=>{
        this.total = this.total + produto.valor_final;
    })
  }
}
