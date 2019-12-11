import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../Modelos/Categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = "http://localhost:8080/tiendavirtual/categorias";

  constructor(private http:HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  
  agregarCategoria(categoria:Categoria)  {
    return this.http.post<Categoria>(`${this.url}`, categoria);
  }

  eliminarCategoria(categoria:Categoria) {
    return this.http.delete(`${this.url}/${categoria.id}`);
  }

  buscarCategoria(id: number) {
    return this.http.get<Categoria>(`${this.url}/${id}`);
  }
}
