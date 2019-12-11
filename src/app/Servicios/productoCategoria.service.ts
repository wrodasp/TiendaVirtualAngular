import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoCategoria } from '../Modelos/productoCategoria';
@Injectable({
  providedIn: 'root'
})
export class ProductoCategoriaService {

url = "http://localhost:8080/tiendavirtual/productos_categorias";
  constructor(private http:HttpClient) { }

  getCategoriasProductos(): Observable<any>{
    return this.http.get(`${this.url}`);
  }

  buscarProducto(id:number){
    return this.http.get<ProductoCategoria>((`${this.url}/${id}`));
  }

  agregarProductoCategoria(productoCategorias:ProductoCategoria){
    return this.http.post<ProductoCategoria>(`${this.url}`, productoCategorias);
  }

  eliminarProductoCategoria(productoCategorias:ProductoCategoria) {
    return this.http.delete(`${this.url}/${productoCategorias.id}`);
  }
}
