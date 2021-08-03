import { Component, OnInit } from '@angular/core';
import { CorretorService } from 'src/app/shared/services/corretor.service';
import { Corretor } from 'src/app/shared/models/corretor.model';
import { Venda } from 'src/app/shared/models/venda.model';
import { VendaService } from 'src/app/shared/services/venda.service';

@Component({
  selector: 'app-pesquisar-data',
  templateUrl: './pesquisar-data.component.html',
  styleUrls: ['./pesquisar-data.component.css']
})
export class PesquisarDataComponent implements OnInit {
  corretores: Corretor[] = [];
  vendas: Venda[] = []
  resultado = ""
  mes = ""
  ano= ""
  name=""
  pagamento=0
  constructor(private corretorService: CorretorService, private vendaService: VendaService) { }

  ngOnInit(): void {
    this.corretorService.getCorretores().subscribe((corretores) => {
      this.corretores = corretores
    });
  }

  calculaPagamento(corretor: Corretor): void {
    this.vendaService.getVendas(this.ano, this.mes).subscribe((vendas) => {
      this.vendas = vendas
    });
    this.vendas.forEach(v => { 
      if(v.corretor == corretor._id) this.pagamento += (corretor.percentual/100) * v.valorRealVenda;
    });
    console.log("Comissao: "+ this.pagamento+" Ano:"+this.ano+" Mes:"+this.mes)
    this.pagamento += corretor.salario;
  }

  mostraSalario(): void {
    this.pagamento = 0;
    this.corretores.forEach(c => { 
      if(c.name == this.name) this.calculaPagamento(c);
    });
    this.resultado = "O salário do corretor "+this.name+" é "+ this.pagamento;
  }
}
