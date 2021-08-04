import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovel } from '../models/imovel.model';
import { ImovelList } from '../models/imovelList.model';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  url = 'http://127.0.0.1:3000/auth/imoveis';
  url_cadastro = 'http://127.0.0.1:3000/auth/cadastro_imoveis';
  url_excluir = 'http://127.0.0.1:3000/auth/remove_imovel';
  url_update = 'http://127.0.0.1:3000/auth/update_imovel';
  url_venda = 'http://127.0.0.1:3000/auth/cadastro_venda';
  tipo = ''
  codigo = ''
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  
  constructor(
    private httpClient: HttpClient
  ) { }
  public setDados(tipo:string , codigo:string){
    this.tipo = tipo;
    this.codigo= codigo;
  }
  public getTipo(){
    return this.tipo;
  }
  public getCodigo(){
    return this.codigo;
  }
  public getImoveis():Observable<ImovelList>{
    return this.httpClient.get<ImovelList>(this.url, )
  }
  public cadastrarImovel(imovel: any): Observable<Imovel>{
    return this.httpClient.post<any>(this.url_cadastro, imovel , this.httpOption);
  }
  public alterarImovel(imovel: any): Observable<Imovel>{
    return this.httpClient.post<any>(this.url_update, imovel , this.httpOption);
  }
  public remove(imovel: any): Observable<Imovel>{
    return this.httpClient.post<any>(this.url_excluir, imovel , this.httpOption);
  }
  public venderImovel(imovel: any): Observable<Imovel>{
    return this.httpClient.post<any>(this.url_venda, imovel , this.httpOption);
  }
}
