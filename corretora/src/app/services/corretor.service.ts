import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Corretor } from 'src/app/Corretor';
import { CORRETORES } from 'src/app/mock-corretores';

@Injectable({
  providedIn: 'root'
})
export class CorretorService {
  apiUrl = "http://localhost:3001"
  
  constructor(private http:HttpClient) { }

  getCorretores(): Observable<Corretor[]> {
    /*
    //Usando mock-corretores.ts
    const corretores = of(CORRETORES)
    return corretores*/
    return this.http.get<Corretor[]>(this.apiUrl+"/corretores")
  }
}