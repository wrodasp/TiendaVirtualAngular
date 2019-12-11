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
  buscarProducto(id:number){
    return this.http.get<Producto>((`${this.url}/${id}`));
  }
  buscarProductoDesc(descripcion:String){
    console.log(descripcion);
    return this.http.get<Producto>((`${this.url}/${descripcion}`));
  }
  
  agregarProducto(producto:Producto)  {

    return this.http.post<Producto>(`${this.url}`, producto);
  }

  eliminarProducto(producto:Producto) {
    return this.http.delete(`${this.url}/${producto.id}`);
  }
  modificarProducto(producto:Producto){
    console.debug(producto.id);
    return this.http.put<Producto>(`${this.url}/${producto.id}`, producto);

  }
}
