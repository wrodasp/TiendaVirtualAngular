import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { DialogoConfirmacionService } from 'src/app/Servicios/dialogo-confirmacion.service';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Categoria } from 'src/app/Modelos/Categoria';
import { ProductoCategoriaService } from 'src/app/Servicios/productoCategoria.service';
import { ProductoCategoria } from 'src/app/Modelos/productoCategoria';
import { Observable } from 'rxjs';
import { CategoriasService } from 'src/app/Servicios/categorias.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  producto = new Producto();
  categorias: Categoria[];
  productoCat: ProductoCategoria;
  categoriasProducto: Observable<ProductoCategoria[]>;

  constructor(private dialogoConfirmacion:DialogoConfirmacionService,
              private servicio:ProductosService,
              private servicioCategoriasProductos: ProductoCategoriaService,
              private servicioCategorias: CategoriasService,
              private router:Router) { }

  ngOnInit() {
    this.mostrarDatos();
  }

  mostrarDatos(){
    let id = localStorage.getItem("id");
    this.servicio.buscarProducto(parseInt(id)).subscribe(
      data => {
        this.producto = data;
        this.listarCategoriasDelProducto();
      }
    );
  }

  listarCategoriasDelProducto() {
    this.categorias = new Array<Categoria>();
    this.categoriasProducto = this.servicioCategoriasProductos.getCategoriasProductos()
    this.categoriasProducto.subscribe(
      data => {
        data.forEach(
          productoCategoria => {
            this.servicioCategorias.buscarCategoria(productoCategoria.categoria_id).subscribe(
              categoria => {this.categorias.push(categoria)}
            );
          }
        )
      }
    )
  }

  actualizar(producto:Producto){
    this.dialogoConfirmacion.confirm().then(
      (confirmado) => {if (confirmado){
        this.servicio.modificarProducto(producto).subscribe(
          data=> {
            this.categoriasProducto.subscribe(
              elemento => {
                elemento.forEach(
                  productoCategoria => {
                    this.servicioCategoriasProductos.eliminarProductoCategoria(productoCategoria);
                  }
                )
              }
            )
            this.categorias.forEach(
              (elemento) => {
                this.productoCat = new ProductoCategoria();
                this.productoCat.producto_id = data.id;
                this.productoCat.categoria_id = elemento.id;
                this.servicioCategoriasProductos.agregarProductoCategoria(this.productoCat);
            })
            this.router.navigate(["productos"]);
          }
        );
      }}
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
    if (!this.categorias.includes(categoria)) {
      this.categorias.push(categoria);
    } else {
      let indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    }
  }
}
