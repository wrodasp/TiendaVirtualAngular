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

  constructor(private dialogoConfirmacion:DialogoConfirmacionService,
              private servicio:ProductosService,
              private router:Router) {}
  
  ngOnInit() {
    this.listarProductos();
    this.filtro = "";
  }

  listarProductos() {
    this.servicio.getProductos().subscribe(
      data => this.productos = data
    );
  }
  
  agregarProducto() {
    this.router.navigate(["administracion/productos/nuevoProducto"]);
  }

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

  modificarProducto(producto:Producto) {
    localStorage.setItem("id", producto.id.toString());
    this.router.navigate(['administracion/productos/modificarProducto']);
  }

  ordenar(atributo:String) {
    if (atributo == "descripcion") this.productos.sort(this.ordenarPorDescripcion)
    else if (atributo == "cantidad") this.productos.sort(this.ordenarPorCantidad)
    else if (atributo == "precio") this.productos.sort(this.ordenarPorPrecio)
    else if (atributo == "votos") this.productos.sort(this.ordenarPorVotos)
  }

  ordenarPorDescripcion(a: Producto, b:Producto) {
    if (a.descripcion > b.descripcion) return 1
    else if (a.descripcion < b.descripcion) return -1
    else return 0;
  }

  ordenarPorCantidad(a: Producto, b:Producto) {
    if (a.cantidad > b.cantidad) return 1
    else if (a.cantidad < b.cantidad) return -1
    else return 0;
  }

  ordenarPorPrecio(a: Producto, b:Producto) {
    if (a.precio > b.precio) return 1
    else if (a.precio < b.precio) return -1
    else return 0;
  }

  ordenarPorVotos(a: Producto, b:Producto) {
    if (a.votos > b.votos) return 1
    else if (a.votos < b.votos) return -1
    else return 0;
  }

  filtrar() {
    this.productos = this.productos.filter(
      data => data.descripcion.toLowerCase().includes(this.filtro.toLowerCase())
    ) 
    this.filtro = "" 
  }
}