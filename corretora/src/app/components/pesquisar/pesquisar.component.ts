import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  @Output() OnPesquisar: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submeteu!")
  }
}
