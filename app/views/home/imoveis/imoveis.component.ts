import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Imovel } from 'src/app/shared/models/imovel.model';
import { ImovelService } from 'src/app/shared/services/imovel.service'
import { DialogoImovelComponent } from '../dialogo-imovel/dialogo-imovel.component';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css']
})
export class ImoveisComponent implements OnInit {

  imoveisCadastrados: Imovel[] =[]; 
  tipos: String[] =[];
  tipoSelecionado: String = 'casa';
  constructor(
    public ImovelService: ImovelService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getImoveis()
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
    this.ImovelService.remove(imovel);
    console.log(imovel.codigo);
  }

  //adiciona os tipo de imoveis disponivel sem adicionar duplicados
  //isso ajuda na hora de adicionar os tipo de imoveis no select pra poder seleciona um imovel pelo tipo
  tiposDisponiveis(){
    for(let i=0; i < this.imoveisCadastrados.length; i++){
      if(this.tipos.indexOf(this.imoveisCadastrados[i].tipo) == -1){
        this.tipos.push(this.imoveisCadastrados[i].tipo)
      }
    }
  }

  //quando seleciona um imovel o tipo é alterado e os imoveis desse tipo sao atualizados na tela
  tipoSelected(selected: String){
    this.tipoSelecionado = selected;
  }

}
