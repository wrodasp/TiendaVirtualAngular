import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelos/Producto';
import { Categoria } from '../Modelos/Categoria';
import { Router } from '@angular/router';
import { ProductosService } from '../Servicios/productos.service';
import { CategoriasService } from '../Servicios/categorias.service';
import { ProductoCategoriaService } from '../Servicios/productoCategoria.service';
import { ProductoCategoria } from '../Modelos/productoCategoria';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  textoBusqueda: String = ""
  categorias: Categoria[]
  productos: Producto[]
  rutaLogo = '../assets/imagenes/logo.png'

  constructor(private router:Router,
              private servicioProducto:ProductosService,
              private servicioCategoria:CategoriasService,
              private servicioProCat:ProductoCategoriaService) { }

  ngOnInit() {
    this.listarCategorias()
    this.listarProductos()
  }

  listarCategorias() {
    this.servicioCategoria.getCategorias().subscribe(
      data => this.categorias = data
    )
  }

  listarProductos() {
    this.servicioProducto.getProductos().subscribe(
      data => this.productos = data
    )
  }

  buscarProductos() {
    this.productos = this.productos.filter(
      data => data.descripcion.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    )

    this.textoBusqueda = ""
  }

  iniciarSesion() {
    this.router.navigate(['login'])
  }

  pasarCategoria(categoria:Categoria) {
    let categoriasDisponibles = Array<ProductoCategoria>()
    this.servicioProCat.getCategoriasProductos().subscribe(
      data => categoriasDisponibles = data
    )
    categoriasDisponibles.filter(
      categoria => categoria.categoria_id == categoria.id
    )
    this.productos.filter(
      producto => {
        categoriasDisponibles.forEach(
          pro_cat => pro_cat.producto_id == producto.id
        )
      } 
    )
  }

  verProducto(producto:Producto) {
    localStorage.setItem("id", producto.id.toString());
    this.router.navigate(['producto']);
  }

  limpiarProductos() {
    this.listarProductos()
  }
}