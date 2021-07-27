import { Component, OnInit } from '@angular/core';
import { Corretor } from 'src/app/Corretor';
import { CORRETORES } from 'src/app/mock-corretores';

@Component({
  selector: 'app-corretores',
  templateUrl: './corretores.component.html',
  styleUrls: ['./corretores.component.css']
})
export class CorretoresComponent implements OnInit {
  corretores: Corretor[] = CORRETORES;

  constructor() { }

  ngOnInit(): void {
  }

}
