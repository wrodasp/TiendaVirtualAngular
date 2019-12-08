import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelos/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = "http://localhost:8080/tiendavirtual/productos";

  constructor(private http:HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  
  agregarProducto(producto:Producto)  {
    return this.http.post<Producto>(`${this.url}`, producto);
  }

  eliminarProducto(producto:Producto) {
    return this.http.delete(`${this.url}/${producto.id}`);
  }
}
