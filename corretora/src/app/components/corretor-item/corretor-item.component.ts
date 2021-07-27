import { Component, OnInit, Input } from '@angular/core';
import { Corretor } from 'src/app/Corretor';

@Component({
  selector: 'app-corretor-item',
  templateUrl: './corretor-item.component.html',
  styleUrls: ['./corretor-item.component.css']
})
export class CorretorItemComponent implements OnInit {
  @Input() corretor!: Corretor

  constructor() { }

  ngOnInit(): void {
  }

}
