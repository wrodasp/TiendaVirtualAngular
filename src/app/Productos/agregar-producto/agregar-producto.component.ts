import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Categoria } from 'src/app/Modelos/Categoria';
import { CategoriasService } from 'src/app/Servicios/categorias.service';
import { ProductoCategoriaService } from 'src/app/Servicios/productoCategoria.service';
import { ProductoCategoria } from 'src/app/Modelos/productoCategoria';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto = new Producto();
  productoCat:ProductoCategoria;
  categorias: Categoria[];
  categoriasAgregadas: Categoria[];

  constructor(private servicioProducto: ProductosService,
              private router: Router,
              private servicioCategoriasProductos: ProductoCategoriaService,
              private servicioCategorias: CategoriasService) {
  }

  ngOnInit() {
    this.listarCategoria();
    this.categoriasAgregadas = new Array<Categoria>()
  }

  guardar() {
    this.servicioProducto.agregarProducto(this.producto).subscribe(
      data => {
        this.servicioProducto.buscarProductoDesc(this.producto.descripcion).subscribe(
          data => {
            this.categoriasAgregadas.forEach(
              (elemento) => {
                this.productoCat = new ProductoCategoria();
                this.productoCat.producto_id = data.id;
                this.productoCat.categoria_id = elemento.id;
                this.servicioCategoriasProductos.agregarProductoCategoria(this.productoCat);
            })
            this.router.navigate(["/productos"]);
          }
        )
      }
    );
  }

  listarCategoria() {
    this.servicioCategorias.getCategorias().subscribe(
      data => {
        this.categorias = data;
      }
    );
  }

  pasarCategoria(categoria:Categoria) {
    if (!this.categoriasAgregadas.includes(categoria)) {
      this.categoriasAgregadas.push(categoria);
    } else {
      let indice = this.categoriasAgregadas.indexOf(categoria);
      this.categoriasAgregadas.splice(indice, 1);
    }
  }
}
