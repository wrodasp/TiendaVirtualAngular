import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/Usuario';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { ComprasService } from 'src/app/Servicios/compras.service';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Producto } from 'src/app/Modelos/Producto';

@Component({
  selector: 'app-datos-facturacion',
  templateUrl: './datos-facturacion.component.html',
  styleUrls: ['./datos-facturacion.component.css']
})
export class DatosFacturacionComponent implements OnInit {

  correo:string
  usuario:Usuario
  nombreUsuario:string
  fecha:string
  carrito = []
  iconos = [
    '../assets/imagenes/carrito.png',
    '../assets/imagenes/cuenta.png',
    '../assets/imagenes/inicio.png',
  ]

  constructor(private servicioUsuario:UsuariosService,
              private servicioProducto:ProductosService,
              private servicioCompra:ComprasService,
              private router:Router) { }

  ngOnInit() {
    this.carrito = JSON.parse(localStorage.getItem("carrito"))
    if(localStorage.getItem('login') == 'false') {
      this.router.navigate(['login'])
    }
    this.correo = localStorage.getItem('usuario_correo')
    this.servicioUsuario.buscarUsuario(this.correo + '.').subscribe(
      data => {
        this.usuario = data
        this.nombreUsuario = data.nombre + ' ' + data.apellido
      }
    ) 
    this.fecha = new Date().toDateString()
  }

  comprar() {
    this.carrito.forEach(
      data => {
        data[0].cliente_id = this.usuario.correo
        this.servicioCompra.agregarCompra(data[0]).subscribe()
        this.servicioProducto.buscarProducto(data[0].producto_id).subscribe(
          producto => {
            producto.cantidad -= data[0].cantidad
            this.servicioProducto.modificarProducto(producto).subscribe()
          }
        )
      }
    )
    this.irACuenta()
  }

  irACarrito() {
    this.router.navigate(['carrito'])
  }

  irAInicio() {
    this.router.navigate(['inicio'])
  }

  irACuenta() {
    this.router.navigate(['cuenta']) 
  }
}