import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Venda } from '../models/venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  apiUrl = "http://localhost:3000/auth"
  
  constructor(private http:HttpClient) { }

  getVendas(ano:string, mes:string): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.apiUrl+"/vendas/"+ano+"/"+mes)
  } 
}
