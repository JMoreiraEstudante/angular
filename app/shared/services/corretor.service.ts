import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Corretor } from '../models/corretor.model';
import { CorretorList } from '../models/corretorList.model';

@Injectable({
  providedIn: 'root'
})
export class CorretorService {
  url = 'http://127.0.0.1:3000/auth/corretores';
  url_cadastro = "http://localhost:3000/auth/cadastro_corretor"
  url_updateSal = "http://localhost:3000/auth/update_salario"
  _id= ''
  tipo = ''
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  constructor(private http:HttpClient) { }
 
  public getCorretores():Observable<CorretorList>{
    return this.http.get<CorretorList>(this.url, )
  }

  public cadastrarCorretor(corretor: any): Observable<Corretor>{
    return this.http.post<any>(this.url_cadastro, corretor , this.httpOption);
  }
  public AttSalario(corretor: any): Observable<Corretor>{
    return this.http.post<any>(this.url_updateSal, corretor , this.httpOption);
  }
  public SetCorretor(id:any , tipo:any){
    this._id = id;
    this.tipo = tipo;
  }
  public getCorretoreId(){
    return this._id;
  }
  public getCorretoreTipo(){
    return this.tipo;
  }
}
