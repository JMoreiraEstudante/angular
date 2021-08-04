import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Imovel } from 'src/app/shared/models/imovel.model';
import { Venda } from 'src/app/shared/models/venda.model';
import { CorretorService } from 'src/app/shared/services/corretor.service';
import { ImagemService } from 'src/app/shared/services/imagem.service';
import { ImovelService } from 'src/app/shared/services/imovel.service'
import { VendaService } from 'src/app/shared/services/venda.service';
import { DialogoAlterarImovelComponent } from '../dialogo-alterar-imovel/dialogo-alterar-imovel.component';
import { DialogoCorretorComponent } from '../dialogo-corretor/dialogo-corretor.component';
import { DialogoImovelComponent } from '../dialogo-imovel/dialogo-imovel.component';
import { DialogoVendaComponent } from '../dialogo-venda/dialogo-venda.component';
import { ImagemRealComponent } from '../imagem-real/imagem-real.component';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css']
})
export class ImoveisComponent implements OnInit {

  imoveisCadastrados: Imovel[] =[]; 
  tipos: String[] =[];
  tipoSelecionado: String = 'todos';
  
  vendas: Venda[] = []
  
  constructor(
    public ImovelService: ImovelService,
    public CorretorService: CorretorService,
    public dialog: MatDialog,
    public Imagem: ImagemService,
    public VendaService: VendaService,
  ) { }

  ngOnInit(): void {
    this.getImoveis()
    this.obterVendas();
  }
  //Abre o dialog com o formulario para cadastro de imovel
  AddImovel(): void {
    const dialogRef = this.dialog.open(DialogoImovelComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  AlterarImovel(imovel:any):void{
    this.ImovelService.setDados(imovel.tipo , imovel.codigo)
    const dialogRef = this.dialog.open(DialogoAlterarImovelComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  //Mostra Imagem em dimensoes reais
  ShowRealImagem(img:string):void{
    this.Imagem.setImagem(img);
    const dialogRef = this.dialog.open(ImagemRealComponent, {
      minWidth: '400px',
    });
  }
  //Obtem os imoveis do backend
  getImoveis(){
    this.ImovelService.getImoveis().subscribe(data =>{
      this.imoveisCadastrados = data.imoveis;
      this.tiposDisponiveis();
      console.log(this.imoveisCadastrados)
    });
  }
  
   // Remove o imovel
  removeImovel(imovel:any):void{
    this.ImovelService.remove(imovel).subscribe(result => {});
    window.location.reload()
  }

  //adiciona os tipo de imoveis disponivel sem adicionar duplicados
  //isso ajuda na hora de adicionar os tipo de imoveis no select pra poder seleciona um imovel pelo tipo
  tiposDisponiveis(){
    for(let i=0; i < this.imoveisCadastrados.length; i++){
      if(this.tipos.indexOf(this.imoveisCadastrados[i].tipo) == -1){
       if(this.imoveisCadastrados[i].status != "vendido"){
        this.tipos.push(this.imoveisCadastrados[i].tipo)
       }
      }
    }
    this.tipoSelecionado = this.tipos[0]
  }

  //quando seleciona um imovel o tipo é alterado e os imoveis desse tipo sao atualizados na tela
  tipoSelected(selected: String){
    this.tipoSelecionado = selected;
  }
  

  //Salva a venda realizada no banco
  venderImovel(imovel:Imovel):void{
    this.VendaService.SetImove(imovel.codigo);
    const dialogRef = this.dialog.open(DialogoVendaComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.obterVendas();
    });
  }

  obterVendas(){
    this.VendaService.getAllVendas().subscribe(data=>{
      this.vendas = data.vendas;
    })
  }
}
