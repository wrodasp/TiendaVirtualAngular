import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {

  carrito = []
  iconos = [
    '../assets/imagenes/pagar.png',
    '../assets/imagenes/inicio.png',
    '../assets/imagenes/carritoQuitar.png'
  ]

  constructor(private servicioProducto:ProductosService,
              private router:Router) { }

  ngOnInit() {
    this.carrito = JSON.parse(localStorage.getItem("carrito"))
  }

  irAInicio() {
    localStorage.setItem("carrito", JSON.stringify(this.carrito))
    this.router.navigate(['inicio'])
  }

  remover(data:any) {
    this.carrito.splice(this.carrito.indexOf(data),1)
  }

  irAFacturacion() {
    this.router.navigate(['facturacion'])
  }
}
