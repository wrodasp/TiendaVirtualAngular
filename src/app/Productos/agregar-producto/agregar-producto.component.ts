import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Categoria } from 'src/app/Modelos/Categoria';
import { CategoriasService } from 'src/app/Servicios/categorias.service';
import { Observable, Subscriber } from 'rxjs';
import { ProductoCategoriaService } from 'src/app/Servicios/productoCategoria.service';
import { ProductoCategoria } from 'src/app/Modelos/productoCategoria';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto = new Producto();
  producto2 = new Producto();
  productoCat = new ProductoCategoria();
  categorias: Observable<Categoria[]>;
  constructor(private servicio: ProductosService,
    private router: Router,
    private servi: ProductoCategoriaService,
    private servicocat: CategoriasService) { }

  ngOnInit() {
    this.listarCategoria();
  }
  guardar() {
    this.servicio.agregarProducto(this.producto).subscribe(
      data => {
        this.servicio.buscarProductoDesc(this.producto.descripcion).subscribe(
          data => {
            console.log("trae dato: " + data.id);
            this.productoCat.producto_id = data.id;
            this.productoCat.categoria_id = data.id;
            this.servi.agregarProductoCategoria(this.productoCat).subscribe(
              data => {
                this.router.navigate(["/productos"]);
              }
            );
          }
        )
        // this.router.navigate(["/productos"]);
      }
    );

  }
  listarCategoria() {
    this.servicocat.getCategorias().subscribe(
      data => {
        this.categorias = data;
      }
    );

  }
}
