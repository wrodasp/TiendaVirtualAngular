import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {

  correo:string
  totalAPagar = 0
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
    this.correo = localStorage.getItem('usuario_correo')
    this.calcularTotalCarrito()
  }

  irAInicio() {
    localStorage.setItem("carrito", JSON.stringify(this.carrito))
    this.router.navigate(['inicio'])
  }

  remover(data:any) {
    this.totalAPagar = 0
    this.carrito.splice(this.carrito.indexOf(data),1)
    this.calcularTotalCarrito()
  }

  calcularTotalCarrito() {
    this.carrito.forEach(
      data => {
        this.servicioProducto.buscarProducto(data[0].producto_id).subscribe(
          producto => this.totalAPagar += (producto.precio * data[0].cantidad)
        )
      }
    )
  }

  irAFacturacion() {
    if(this.carrito.length == 0) {
      alert('No existen productos por los que pagar!')
    } else {
      localStorage.setItem("carrito", JSON.stringify(this.carrito))
      localStorage.setItem('usuario_correo', this.correo)
      this.router.navigate(['facturacion'])
    }
  }
}