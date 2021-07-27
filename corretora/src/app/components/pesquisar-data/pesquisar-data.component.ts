import { Component, OnInit } from '@angular/core';
import { Corretor } from 'src/app/Corretor';
import { CORRETORES } from 'src/app/mock-corretores';

@Component({
  selector: 'app-pesquisar-data',
  templateUrl: './pesquisar-data.component.html',
  styleUrls: ['./pesquisar-data.component.css']
})
export class PesquisarDataComponent implements OnInit {
  corretores: Corretor[] = CORRETORES;
  resultado = ""
  mes = ""
  ano= ""
  nome=""
  pagamento=0
  constructor() { }

  ngOnInit(): void {
  }

  mostraSalario() {
    this.corretores.forEach(c => { 
      if(c.nome == this.nome) this.pagamento = c.salario + c.comissao
    });
    this.resultado = "O salario do corretor "+this.nome+" no ano "+this.ano+" e mês de "+this.mes +" é "+ this.pagamento;
  }
}
