import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Modelos/Usuario';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { DialogoConfirmacionService } from 'src/app/Servicios/dialogo-confirmacion.service';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css']
})
export class MenuUsuariosComponent implements OnInit {

  usuarios:Observable<Usuario[]>;

  constructor(private dialogoConfirmacion:DialogoConfirmacionService,
              private servicio:UsuariosService,
              private router:Router) {}
  
  ngOnInit() {
    this.listarUsuarios();
  }
/**
 * @description Metodo para listar a todos los usuarios
 */
  listarUsuarios() {
    this.usuarios = this.servicio.getUsuarios();
  }
  /**
   * Metodo para agregar un usuario nuevo
   */
  agregarUsuario() {
    this.router.navigate(["administracion/usuarios/nuevoUsuario"]);
  }
/**
 * 
 * @param usuario Trae al usuario que va a ser modificado
 */
  modificarUsuario(usuario:Usuario) {
    localStorage.setItem("correo", usuario.correo.toString());
    this.router.navigate(['administracion/usuarios/modificarUsuario']);
  }
/**
 * 
 * @param usuario trae al usuario que se va a eliminar
 */
  eliminarUsuario(usuario:Usuario) {
    this.dialogoConfirmacion.confirm().then(
      (confirmado) => {if (confirmado) {
        this.servicio.eliminarUsuario(usuario).subscribe(
          data => {
            this.listarUsuarios();
          }
        );
      }}
    );
  }
}