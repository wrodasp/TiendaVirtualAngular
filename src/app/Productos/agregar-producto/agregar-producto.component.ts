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

  ngOnInit() {
    this.listarCategoria()
    this.producto.votos = 0;
    this.producto.categoria_id = 0
  }

  guardar() {
    this.servicioProducto.agregarProducto(this.producto)
    this.router.navigate(["administracion/productos"]);
  }

  listarCategoria() {
    this.servicioCategorias.getCategorias().subscribe(
      data => {
        this.categorias = data;
      }
    );
  }

  pasarCategoria(categoria:Categoria) {
    this.producto.categoria_id = categoria.id
  }
}
