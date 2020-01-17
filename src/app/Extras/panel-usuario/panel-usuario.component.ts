import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { ComprasService } from 'src/app/Servicios/compras.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Compra } from 'src/app/Modelos/Compra';
import { Producto } from 'src/app/Modelos/Producto';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {

  correo = ""
  nombreSesion:string
  compras = []

  iconos = [
    '../assets/imagenes/carrito.png',
    '../assets/imagenes/logout.png',
    '../assets/imagenes/inicio.png',
    '../assets/imagenes/usuario.png'
  ]

  constructor(private servicioUsuario:UsuariosService,
              private servicioCompras:ComprasService,
              private router:Router) { }

  ngOnInit() {
    this.correo = localStorage.getItem("usuario_correo")
    this.servicioUsuario.buscarUsuario(this.correo + '.').subscribe(
      data => this.nombreSesion = data.nombre + ' ' + data.apellido
    )
    this.buscarCompras()
  }

  buscarCompras() {
    this.servicioCompras.getComprasDelCliente(this.correo + '.').subscribe(
      data => this.compras = data
    )
  }

  irAInicio() {
    this.router.navigate(['inicio'])
    localStorage.setItem("usuario_correo",this.correo)
  }

  irACarrito() {
    this.router.navigate(['carrito'])
    localStorage.setItem("usuario_correo",this.correo)
  }

  cerrarSesion() {
    localStorage.setItem('login','false')
    this.router.navigate(['inicio'])
  }
}