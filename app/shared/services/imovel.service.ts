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

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  
  constructor(
    private httpClient: HttpClient
  ) { }

  public getImoveis():Observable<ImovelList>{
    return this.httpClient.get<ImovelList>(this.url, )
  }

  public cadastrarImovel(imovel: any): Observable<Imovel>{
    return this.httpClient.post<any>(this.url_cadastro, imovel , this.httpOption);
  }
}
