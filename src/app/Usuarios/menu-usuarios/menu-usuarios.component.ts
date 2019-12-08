import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Modelos/Usuario';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css']
})
export class MenuUsuariosComponent implements OnInit {

  usuarios:Observable<Usuario[]>;

  constructor(private servicio:UsuariosService,
              private router:Router) {}
  
  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarios = this.servicio.getUsuarios();
  }
  
  agregarUsuario() {
    this.router.navigate(["nuevoUsuario"]);
  }

  eliminarUsuario(usuario:Usuario) {
    
  }

}
