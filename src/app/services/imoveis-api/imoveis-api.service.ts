import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImoveisApi } from './imoveis-api';

@Injectable({
  providedIn: 'root'
})
export class ImoveisApiService {

  constructor(private httpClient:HttpClient) { }

  public List():Observable<ImoveisApi[]> {
    return this.httpClient.get<ImoveisApi[]>('https://it3imoveis.firebaseio.com/vendas.json');
  }
}
