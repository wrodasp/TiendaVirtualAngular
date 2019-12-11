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
  agregarProductoCategoria(prodCat:ProductoCategoria){
    console.log( prodCat);
    return this.http.post<ProductoCategoria>(`${this.url}`, prodCat);

  }
}
