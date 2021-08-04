import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Corretor } from 'src/app/shared/models/corretor.model';
import { CorretorService } from 'src/app/shared/services/corretor.service';
import { ImovelService } from 'src/app/shared/services/imovel.service';
import { VendaService } from 'src/app/shared/services/venda.service';

@Component({
  selector: 'app-dialogo-venda',
  templateUrl: './dialogo-venda.component.html',
  styleUrls: ['./dialogo-venda.component.css']
})
export class DialogoVendaComponent implements OnInit {
  corretores: Corretor[] = []
  imovel = 0
  public vendaimovelForm: FormGroup = this.fb.group({
    valorRealVenda:['',[Validators.required]],
    nomeComprador:['',[Validators.required]],
    dataVenda:['',[Validators.required]],
    corretor:['',[Validators.required]]
    
  });
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogoVendaComponent>,
    private rest: ImovelService,
    private CorretorService:CorretorService,
    private VendaService: VendaService,
  ) { }

  ngOnInit(): void {
    this.getCorretores();
    this.getCodigoImovel();
  }
//Chamado quando botao cancelar do formulario e clicado
cancelar(): void {
  this.dialogRef.close();
}

//passa os dados do formulario para o post no service
//no service ele envia os dados do form para backend
realizarVenda(){
  if(this.vendaimovelForm.value.corretor != ''){
    this.vendaimovelForm.value.imovel = this.imovel;
    this.rest.venderImovel(this.vendaimovelForm.value).subscribe(result => {});
    this.dialogRef.close();
    window.location.reload()
  }else{
    alert("Necessario ter um Corretor")
  }
}

getCorretores(){
  this.CorretorService.getCorretores().subscribe(data=>{
    this.corretores = data.corretores;
    console.log(this.corretores)
  })
}

getCodigoImovel(){
  this.imovel = this.VendaService.getImovel();
}
}
