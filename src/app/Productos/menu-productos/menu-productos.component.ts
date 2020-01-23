import { Component, OnInit, DebugElement } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Router } from '@angular/router';
import { debug } from 'util';
import { DialogoConfirmacionService } from 'src/app/Servicios/dialogo-confirmacion.service';

@Component({
  selector: 'app-menu-productos',
  templateUrl: './menu-productos.component.html',
  styleUrls: ['./menu-productos.component.css']
})
export class MenuProductosComponent implements OnInit {

  productos:Producto[];
  filtro:String;
  /**
   * @description Constructor de la clase MenuProductosComponents
   * @param dialogoConfirmacion Atributo de dialogoConfirmacion
   * @param servicio Atributo de tipo Productoservice
   * @param router Atributo de tipo router
   */
  constructor(private dialogoConfirmacion:DialogoConfirmacionService,
              private servicio:ProductosService,
              private router:Router) {}
  
  ngOnInit() {
    this.listarProductos();
    this.filtro = "";
  }
/**
 * @description metodo para listar los productos
 */
  listarProductos() {
    this.servicio.getProductos().subscribe(
      data => this.productos = data
    );
  }
  /**
   * @description metodo para Agregar Productos
   */
  agregarProducto() {
    this.router.navigate(["administracion/productos/nuevoProducto"]);
  }
/**
 * @description metodo para eliminar un producto
 * @param producto Recibe un producto para eliminar
 */
  eliminarProducto(producto:Producto) {
    this.dialogoConfirmacion.confirm().then(
      (confirmado) => {
        if (confirmado) {
          this.servicio.eliminarProducto(producto).subscribe(
            data => {
              this.listarProductos();
            }
          );
        }
      }
    );
  }
/**
 * @description Metodo para modificar un producto
 * @param producto Recibe un producto a modificar
 */
  modificarProducto(producto:Producto) {
    localStorage.setItem("id", producto.id.toString());
    this.router.navigate(['administracion/productos/modificarProducto']);
  }
/**
 * @description Metodo de filtrado de productos
 * @param atributo recibe la opcion de filtrado
 */
  ordenar(atributo:String) {
    if (atributo == "descripcion") this.productos.sort(this.ordenarPorDescripcion)
    else if (atributo == "cantidad") this.productos.sort(this.ordenarPorCantidad)
    else if (atributo == "precio") this.productos.sort(this.ordenarPorPrecio)
    else if (atributo == "votos") this.productos.sort(this.ordenarPorVotos)
  }
/**
 * @description Metodo par ordenar por descripcion
 * @param a Recibe un producto
 * @param b Recibe un producto
 */
  ordenarPorDescripcion(a: Producto, b:Producto) {
    if (a.descripcion > b.descripcion) return 1
    else if (a.descripcion < b.descripcion) return -1
    else return 0;
  }
/**
 * @description Metodo par ordenar por Cantidad
 * @param a Recibe un producto
 * @param b Recibe un producto
 */
  ordenarPorCantidad(a: Producto, b:Producto) {
    if (a.cantidad > b.cantidad) return 1
    else if (a.cantidad < b.cantidad) return -1
    else return 0;
  }
/**
 * @description Metodo par ordenar por Precio
 * @param a Recibe un producto
 * @param b Recibe un producto
 */
  ordenarPorPrecio(a: Producto, b:Producto) {
    if (a.precio > b.precio) return 1
    else if (a.precio < b.precio) return -1
    else return 0;
  }
/**
 * @description Metodo par ordenar por Votos
 * @param a Recibe un producto
 * @param b Recibe un producto
 */
  ordenarPorVotos(a: Producto, b:Producto) {
    if (a.votos > b.votos) return 1
    else if (a.votos < b.votos) return -1
    else return 0;
  }
/**
 * @description Metodo para filtrar los produtos
 */
  filtrar() {
    this.productos = this.productos.filter(
      data => data.descripcion.toLowerCase().includes(this.filtro.toLowerCase())
    ) 
    this.filtro = "" 
  }
}