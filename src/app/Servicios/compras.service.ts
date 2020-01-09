import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../Modelos/Compra';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  url = "http://localhost:8080/tiendavirtual/compras";

  constructor(private http:HttpClient) { }

  getCompras(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getProductosMasVendidos(): Observable<any> {
    return this.http.get(`${this.url}/masVendidos`);
  }

  getProductosMasVotados(): Observable<any> {
    return this.http.get(`${this.url}/masVotados`);
  }

  agregarCompra(compra:Compra)  {
    return this.http.post<Compra>(`${this.url}`,compra);
  }
}