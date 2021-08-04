import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CorretorService } from 'src/app/shared/services/corretor.service';

@Component({
  selector: 'app-salario-corretor',
  templateUrl: './salario-corretor.component.html',
  styleUrls: ['./salario-corretor.component.css']
})
export class SalarioCorretorComponent implements OnInit {
  _id = ''
  tipo = ''
  public imovelForm: FormGroup = this.fb.group({
    percentual:['',[Validators.required]],
    salario:['',[Validators.required]],
    _id:['',[Validators.required]],
    tipo:['',[Validators.required]],
  });
  constructor(
    public CorretorService:CorretorService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SalarioCorretorComponent>,
    ) { }

  ngOnInit(): void {
    this._id = this.CorretorService.getCorretoreId();
    this.tipo = this.CorretorService.getCorretoreTipo();
  }
 //Chamado quando botao cancelar do formulario e clicado
 cancelar(): void {
  this.dialogRef.close();
  }

  //passa os dados do formulario para o post no service
  //no service ele envia os dados do form para backend
  alterarSalarioCorretor(){
    this.imovelForm.value._id = this._id;
    this.imovelForm.value.tipo = this.tipo;
    if(this.tipo == 'Comissionado'){
      if(this.imovelForm.value.percentual >=1 && this.imovelForm.value.percentual <=3){
        this.CorretorService.AttSalario(this.imovelForm.value).subscribe(result => {});
        this.dialogRef.close();
        window.location.reload()
      }else{
        alert("Percentual deve estar entre 1 e 3");
      }
    }else{
      this.CorretorService.AttSalario(this.imovelForm.value).subscribe(result => {});
      this.dialogRef.close();
      window.location.reload()
    }
  }
}
