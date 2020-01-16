import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { ComprasService } from 'src/app/Servicios/compras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {

  iconos = [
    '../assets/imagenes/carrito.png',
    '../assets/imagenes/logout.png',
    '../assets/imagenes/inicio.png',
    '../assets/imagenes/usuario.png'
  ]

  constructor(private servicioProductos:ProductosService,
              private servicioCompras:ComprasService,
              private router:Router) { }

  ngOnInit() {
  }

  irAInicio() {
    this.router.navigate(['inicio'])
  }

  irACarrito() {
    this.router.navigate(['carrito'])
  }

  cerrarSesion() {
    localStorage.setItem('login','false')
    this.router.navigate(['inicio'])
  }
}
