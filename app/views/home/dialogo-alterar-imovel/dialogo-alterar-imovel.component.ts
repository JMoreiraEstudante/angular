import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ImovelService } from 'src/app/shared/services/imovel.service';

@Component({
  selector: 'app-dialogo-alterar-imovel',
  templateUrl: './dialogo-alterar-imovel.component.html',
  styleUrls: ['./dialogo-alterar-imovel.component.css']
})
export class DialogoAlterarImovelComponent implements OnInit {
  codigo_v = ''
  tipo_v = ''
  public imovelForm: FormGroup = this.fb.group({
    codigo:[this.codigo_v],
    tipo:[this.tipo_v],
    descricao:['',[Validators.required]],
    nomeVendedor:['',[Validators.required]],
    preco:['',[Validators.required]],
    imagem:['',[Validators.required]],
    data:['',[Validators.required]]
  });
  constructor(
    private fb: FormBuilder,
    private rest: ImovelService,
    public dialogRef: MatDialogRef<DialogoAlterarImovelComponent>,
  ) { }

  ngOnInit(): void {
    this.codigo_v= this.rest.getCodigo();
    this.tipo_v = this.rest.getTipo();
  }
//Chamado quando botao cancelar do formulario e clicado
cancelar(): void {
  this.dialogRef.close();
}

//Atualiza os dados do imovel
alterarImovel(){
  this.imovelForm.value.codigo = this.codigo_v;
  this.imovelForm.value.tipo = this.tipo_v;
  console.log(this.imovelForm.value)
  this.rest.alterarImovel(this.imovelForm.value).subscribe(result => {});
  this.dialogRef.close();
  //window.location.reload()
}
}
