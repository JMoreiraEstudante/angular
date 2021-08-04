import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Corretor } from 'src/app/shared/models/corretor.model';
import { CorretorService } from 'src/app/shared/services/corretor.service';
import { DialogoCorretorComponent } from '../dialogo-corretor/dialogo-corretor.component';
import { SalarioCorretorComponent } from '../salario-corretor/salario-corretor.component';

@Component({
  selector: 'app-corretor',
  templateUrl: './corretor.component.html',
  styleUrls: ['./corretor.component.css']
})
export class CorretorComponent implements OnInit {

  corretores: Corretor[] = []
  creciSelecionado = 40028922
  constructor(
    public CorretorService: CorretorService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getCorretores()
  }
  AddCorretor(): void {
    const dialogRef = this.dialog.open(DialogoCorretorComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCorretores()
    });
  }
  AlterarSalario(id:any , tipo:any):void{
    this.CorretorService.SetCorretor(id, tipo)
    const dialogRef = this.dialog.open(SalarioCorretorComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getCorretores(){
    this.CorretorService.getCorretores().subscribe(data =>{
      this.corretores = data.corretores;
    });
  }
  SearchCorretor(creci:string){
    this.creciSelecionado = parseInt(creci)
  }
}
