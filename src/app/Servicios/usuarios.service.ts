import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelos/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = "http://localhost:8080/tiendavirtual/usuarios";

  constructor(private http:HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  
  agregarUsuario(usuario:Usuario)  {
    return this.http.post<Usuario>(`${this.url}/agregar`,usuario);
  }

  buscarUsuario(correo:String)  {
    return this.http.get<Usuario>(`${this.url}/buscar/${correo}`);
  }

  modificarUsuario(usuario:Usuario)  {
    return this.http.put<Usuario>(`${this.url}/modificar/${usuario.correo}.`, usuario);
  }

  eliminarUsuario(usuario:Usuario) {
    return this.http.delete(`${this.url}/eliminar/${usuario.correo}`);
  }
}
