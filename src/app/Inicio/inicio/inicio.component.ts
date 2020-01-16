import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { Compra } from 'src/app/Modelos/Compra';
import { Categoria } from 'src/app/Modelos/Categoria';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { CategoriasService } from 'src/app/Servicios/categorias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  textoBusqueda: String = ""
  categorias: Categoria[]
  productos: Producto[]
  listaCompletaProductos: Producto[]
  iconos = [
    '../assets/imagenes/logo.png',
    '../assets/imagenes/carrito.png',
    '../assets/imagenes/login.png'
  ]

  carrito = []

  constructor(private router: Router,
              private servicioProducto: ProductosService,
              private servicioCategoria: CategoriasService) { }

  ngOnInit() {
    this.listarProductos()
    this.listarCategorias()
    if (localStorage.getItem("carrito") != null) {
      this.carrito = JSON.parse(localStorage.getItem("carrito"))
    }
  }

  listarCategorias() {
    this.servicioCategoria.getCategorias().subscribe(
      data => {
        this.categorias = data
        let extra = new Categoria()
        extra.id = 0
        extra.descripcion = 'Todas'
        this.categorias.push(extra)
        this.categorias.sort((x, y) => x.id - y.id)
      }
    )
  }

  listarProductos() {
    this.servicioProducto.getProductos().subscribe(
      data => {
        this.listaCompletaProductos = data
        this.productos = data
      }
    )
    this.productos = this.listaCompletaProductos
  }

  iniciarSesion() {
    this.router.navigate(['login'])
  }

  filtrarPorCategoria(categoria: Categoria) {
    this.productos = this.listaCompletaProductos
    if (categoria.descripcion != 'Todas') {
      this.productos = this.productos.filter(producto => producto.categoria_id == categoria.id)
    }
  }

  irACarrito() {
    localStorage.setItem("carrito", JSON.stringify(this.carrito))
    this.router.navigate(['carrito']);
  }

  irADetalleProducto(producto:Producto) {
    this.router.navigate(['detalleProducto/'+ producto.id])
  }
}
