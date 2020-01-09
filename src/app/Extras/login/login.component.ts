import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: String
  clave: String
  mensaje: String
  rutaLogo = '../assets/imagenes/logo.png'

  constructor(private servicio:UsuariosService,
              private router:Router) { }

  ngOnInit() {
    this.mensaje = "";
  }

  iniciarSesion() {
    this.servicio.buscarUsuario(this.correo + '.').subscribe(
      data => {
        if (data != null) {
          if (data.clave == this.clave) {
            this.router.navigate(['administracion'])
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
}