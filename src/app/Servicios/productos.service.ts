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
    return this.http.get<Producto>((`${this.url}/buscar/${id}`));
  }

  buscarProductoDesc(descripcion:String){
    return this.http.get<Producto>((`${this.url}/filtro/${descripcion}.`));
  }
  
  agregarProducto(producto:Producto)  {
    return this.http.post<Producto>(`${this.url}/agregar`, producto);
  }

  eliminarProducto(producto:Producto) {
    return this.http.delete(`${this.url}/eliminar/${producto.id}`);
  }

  modificarProducto(producto:Producto){
    return this.http.put<Producto>(`${this.url}/modificar/${producto.id}`, producto);
  }
}
