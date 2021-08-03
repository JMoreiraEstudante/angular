import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  imagem = ''
  constructor(  ) { }
  setImagem(img:string){
    this.imagem = img;
  }
  getImagem(){
    return this.imagem;
  }
}
