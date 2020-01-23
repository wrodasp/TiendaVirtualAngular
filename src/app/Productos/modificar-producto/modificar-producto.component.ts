import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { DialogoConfirmacionService } from 'src/app/Servicios/dialogo-confirmacion.service';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Categoria } from 'src/app/Modelos/Categoria';
import { CategoriasService } from 'src/app/Servicios/categorias.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  producto = new Producto();
  categorias: Categoria[];

  constructor(private dialogoConfirmacion:DialogoConfirmacionService,
              private servicio:ProductosService,
              private servicioCategorias: CategoriasService,
              private router:Router) { }

  ngOnInit() {
    this.mostrarDatos();
  }
  /**
   * @description Metodo para mostrar los datos
   */
  mostrarDatos(){
    let id = localStorage.getItem("id");
    this.servicio.buscarProducto(parseInt(id)).subscribe(
      data => {
        this.producto = data;
      }
    );
  }
/**
 * @description metodo para listar categoria del producto
 */
  listarCategoriaDelProducto() {
    this.servicioCategorias.getCategorias().subscribe(
      data => this.categorias = data
    )
  }
/**
 * @description Metodo para Actualizar un producto
 * @param producto Recibe un dato tipo Producto 
 */
  actualizar(producto:Producto){
    this.dialogoConfirmacion.confirm().then(
      (confirmado) => {if (confirmado){
        this.servicio.modificarProducto(producto).subscribe(
          data => this.router.navigate(["administracion/productos"])
        )
      }}
    );
  }
/**
 * @description Metodo para listar las categorias de los productos
 */
  listarCategoria() {
    this.servicioCategorias.getCategorias().subscribe(
      data => {
        this.categorias = data;
      }
    );
  }
}