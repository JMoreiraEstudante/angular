import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Venda } from '../models/venda.model';
import { VendaList } from '../models/vendaList.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  apiUrl = "http://localhost:3000/auth";
  url = "http://localhost:3000/auth/vendas";
  imovel = 0
  constructor(private http:HttpClient) { }

  getVendas(ano:string, mes:string): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.apiUrl+"/vendas/"+ano+"/"+mes)
  } 

  public getAllVendas():Observable<VendaList>{
    return this.http.get<VendaList>(this.url, )
  }

  public SetImove(cod: number){
    this.imovel = cod;
  }
  public getImovel(){
    return this.imovel;
  }
}
