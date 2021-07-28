import { Component, OnInit } from '@angular/core';
import { CorretorService } from 'src/app/services/corretor.service';
import { Corretor } from 'src/app/Corretor';

@Component({
  selector: 'app-pesquisar-data',
  templateUrl: './pesquisar-data.component.html',
  styleUrls: ['./pesquisar-data.component.css']
})
export class PesquisarDataComponent implements OnInit {
  corretores: Corretor[] = [];
  resultado = ""
  mes = ""
  ano= ""
  name=""
  pagamento=0
  constructor(private corretorService: CorretorService) { }

  ngOnInit(): void {
    this.corretorService.getCorretores().subscribe((corretores) => {
      this.corretores = corretores
    })
  }

  mostraSalario() {
    this.corretores.forEach(c => { 
      if(c.name == this.name) this.pagamento = c.salario
    });
    this.resultado = "O salario do corretor "+this.name+" no ano "+this.ano+" e mês de "+this.mes +" é "+ this.pagamento;
  }
}
