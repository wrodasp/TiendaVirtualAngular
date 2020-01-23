import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Categoria } from 'src/app/Modelos/Categoria';
import { CategoriasService } from 'src/app/Servicios/categorias.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto = new Producto();
  categorias: Categoria[];

  constructor(private servicioProducto: ProductosService,
              private router: Router,
              private servicioCategorias: CategoriasService) {
  }
/**
 * @description Un método de devolución de llamada que se invoca inmediatamente
 */
  ngOnInit() {
    this.listarCategoria()
    this.producto.votos = 0;
    this.producto.categoria_id = 0
  }
/**
 * @description Metodo para guardar un producto
 */
  guardar() {
    this.servicioProducto.agregarProducto(this.producto)
    this.router.navigate(["administracion/productos"]);
  }
/**
 * @description ListarCategoria lista las categorias de los productos
 */
  listarCategoria() {
    this.servicioCategorias.getCategorias().subscribe(
      data => {
        this.categorias = data;
      }
    );
  }
/**
 * @description metodo pasarCategoria
 * @param categoria atributo de tipo Categoria 
 */
  pasarCategoria(categoria:Categoria) {
    this.producto.categoria_id = categoria.id
  }
}
