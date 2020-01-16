import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/Usuario';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-cuenta',
  templateUrl: './nueva-cuenta.component.html',
  styleUrls: ['./nueva-cuenta.component.css']
})
export class NuevaCuentaComponent implements OnInit {

  usuario = new Usuario()
  claveRepetida = ""
  iconos = [
    '../assets/imagenes/carrito.png',
    '../assets/imagenes/inicio.png'
  ]

  constructor(private servicio: UsuariosService,
              private router: Router) { }

  ngOnInit() {
  }

  crearCuenta() {
    this.usuario.roll = "Cliente"
    this.usuario.correo = this.usuario.correo + ".";
    if (this.usuario.clave == this.claveRepetida) {
      this.servicio.agregarUsuario(this.usuario).subscribe(
        data => this.router.navigate(['cuenta']) 
      )
    }
  }

  irACarrito() {
    this.router.navigate(['carrito']);
  }

  irAInicio() {
    this.router.navigate(['inicio'])
  }
}
