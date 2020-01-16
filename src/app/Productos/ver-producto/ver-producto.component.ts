import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { CategoriasService } from 'src/app/Servicios/categorias.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Producto } from 'src/app/Modelos/Producto';
import { Categoria } from 'src/app/Modelos/Categoria';
import { Compra } from 'src/app/Modelos/Compra';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  producto = new Producto()
  categoria = new Categoria()
  cantidadCarrito = 1
  carrito = []
  iconos = [
    '../assets/imagenes/carrito.png',
    '../assets/imagenes/logout.png',
    '../assets/imagenes/inicio.png',
    '../assets/imagenes/meGusta.png',
    '../assets/imagenes/carritoAgregar.png'
  ]


  constructor(private servicioProducto:ProductosService,
              private servicioCategoria:CategoriasService,
              private rutaActiva: ActivatedRoute,
              private router:Router) { }

  ngOnInit() { 
    this.buscarProducto()
    if (localStorage.getItem("carrito") != null) {
      this.carrito = JSON.parse(localStorage.getItem("carrito"))
    }
  }

  buscarProducto() {
    let id = <number> <unknown> this.rutaActiva.snapshot.params.id
    console.log(id)
    this.servicioProducto.buscarProducto(id).subscribe(
      data => {
        this.producto = data
        this.buscarCategoriaDelProducto(this.producto.categoria_id)
      }  
    )
  }

  buscarCategoriaDelProducto(id:number) {
    this.servicioCategoria.buscarCategoria(id).subscribe(
      data => {
        if (data != null) {
          this.categoria = data
        } else {
          this.categoria.descripcion = "Todas"
        }
      }
    )
  }

  votar() {
    this.producto.votos += 1
    this.servicioProducto.modificarProducto(this.producto).subscribe()
  }

  compartir() {

  }

  irAInicio() {
    this.router.navigate(['inicio']);
  }

  irACarrito() {
    localStorage.setItem("carrito", JSON.stringify(this.carrito))
    this.router.navigate(['carrito']);
  }

  iniciarSesion() {
    this.router.navigate(['login']);
  }

  agregarAlCarrito() {
    let compra = new Compra()
    compra.producto_id = this.producto.id
    compra.cantidad = this.cantidadCarrito;
    if (this.carrito.find(data => data[0].producto_id == this.producto.id) == null) {
      this.carrito.push([compra, this.producto.imagen])
    } else {
      this.carrito.find(data => data[0].producto_id == this.producto.id)[0].cantidad += 1
    }
  }
}