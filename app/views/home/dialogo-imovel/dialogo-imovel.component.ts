import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ImovelService } from 'src/app/shared/services/imovel.service';

@Component({
  selector: 'app-dialogo-imovel',
  templateUrl: './dialogo-imovel.component.html',
  styleUrls: ['./dialogo-imovel.component.css']
})
export class DialogoImovelComponent implements OnInit {
  
  //Formulario sera exibido para cadastrar imovel
  public imovelForm: FormGroup = this.fb.group({
    codigo:['',[Validators.required]],
    tipo:['',[Validators.required]],
    descricao:['',[Validators.required]],
    nomeVendedor:['',[Validators.required]],
    preco:['',[Validators.required]],
    imagem:['',[Validators.required]],
    data:['',[Validators.required]],
    status:['',[Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private rest: ImovelService,
    public dialogRef: MatDialogRef<DialogoImovelComponent>,
  ) { }

  ngOnInit(): void {
    
  }
  //Chamado quando botao cancelar do formulario e clicado
  cancelar(): void {
    this.dialogRef.close();
  }

  //passa os dados do formulario para o post no service
  //no service ele envia os dados do form para backend
  salvarImovel(){
    this.imovelForm.value.status = "avenda"
    this.rest.cadastrarImovel(this.imovelForm.value).subscribe(result => {});
    this.dialogRef.close();
    window.location.reload()
  }
}
