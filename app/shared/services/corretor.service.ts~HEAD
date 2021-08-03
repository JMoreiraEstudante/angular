import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Corretor } from '../models/corretor.model';

@Injectable({
  providedIn: 'root'
})
export class CorretorService {
  apiUrl = "http://localhost:3000/auth"
  
  constructor(private http:HttpClient) { }

  getCorretores(): Observable<Corretor[]> {
    /*
    //Usando mock-corretores.ts
    const corretores = of(CORRETORES)
    return corretores*/
    return this.http.get<Corretor[]>(this.apiUrl+"/corretores")
  }
}
