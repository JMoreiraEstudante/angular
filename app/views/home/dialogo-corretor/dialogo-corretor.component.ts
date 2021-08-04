import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CorretorService } from 'src/app/shared/services/corretor.service';

@Component({
  selector: 'app-dialogo-corretor',
  templateUrl: './dialogo-corretor.component.html',
  styleUrls: ['./dialogo-corretor.component.css']
})
export class DialogoCorretorComponent implements OnInit {

  tipoCorretor = ''
  public corretorForm: FormGroup = this.fb.group({
    tipo:['',[Validators.required]],
    name:['',[Validators.required]],
    salario:['',[Validators.required]],
    creci:['',[Validators.required]],
    percentual:['',[Validators.required]],
    data_admissao:['',[Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private rest: CorretorService,
    public dialogRef: MatDialogRef<DialogoCorretorComponent>,
  ) { }

  ngOnInit(): void {
  }
  cancelar(): void {
    this.dialogRef.close();
  }

  //passa os dados do formulario para o post no service
  //no service ele envia os dados do form para backend
  salvarCorretor(){
    if(this.tipoCorretor == 'Comissionado'){
      if(this.corretorForm.value.percentual >= 1 && this.corretorForm.value.percentual <= 3 ){
        this.corretorForm.value.data_admissao = Date.now();
        this.rest.cadastrarCorretor(this.corretorForm.value).subscribe(result => {});
        this.dialogRef.close();
      }else{
        alert("Percentual deve estar entre 1 e 3");
      }
    }else{
      this.rest.cadastrarCorretor(this.corretorForm.value).subscribe(result => {});
      this.dialogRef.close();
    }
  }

  setTipo(tipo:string){
    this.tipoCorretor = tipo;
  }
}
