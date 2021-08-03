import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImagemService } from 'src/app/shared/services/imagem.service';

@Component({
  selector: 'app-imagem-real',
  templateUrl: './imagem-real.component.html',
  styleUrls: ['./imagem-real.component.css']
})
export class ImagemRealComponent implements OnInit {
  img = ''
  constructor(
    public dialogRef: MatDialogRef<ImagemRealComponent>,
    public Imagem: ImagemService,
  ) { }

  ngOnInit(): void {
    this.img = this.Imagem.getImagem();
  }
  
}
