import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string
  clave: string
  mensaje: string
  iconos = [
    '../assets/imagenes/logo.png',
    '../assets/imagenes/carrito.png',
    '../assets/imagenes/inicio.png'
  ]

  constructor(private servicio:UsuariosService,
              private router:Router) { }

  ngOnInit() {
    this.mensaje = "";
    if(localStorage.getItem("login") == "true") {
      if(localStorage.getItem("rolUsuario") == "Administrador") {
        this.router.navigate(['administracion'])
      } else {
        this.router.navigate(['cuenta'])
      }
    }
  }

  iniciarSesion() {
    this.servicio.buscarUsuario(this.correo + '.').subscribe(
      data => {
        if (data != null) {
          if (data.clave == this.clave) {
            localStorage.setItem("login","true")
            if(data.roll == "Administrador") {
              localStorage.setItem("rolusuario","Administrador")
              this.router.navigate(['administracion'])
            } else {
              localStorage.setItem("usuario_correo",this.correo)
              localStorage.setItem("rolusuario","Cliente")
              this.router.navigate(['cuenta'])
            }
          } else {
            this.mensaje = "Contraseña incorrecta!"
            alert('Contraseña incorrecta!')
          }
        } else {
          this.mensaje = "El usuario no existe!"
          alert('El usuario no existe!')
        }
      }
    )
  }

  irACarrito() {
    this.router.navigate(['carrito']);
  }

  irAInicio() {
    this.router.navigate(['inicio'])
  }

  crearNuevaCuenta() {
    this.router.navigate(['nuevaCuenta'])
  }
}