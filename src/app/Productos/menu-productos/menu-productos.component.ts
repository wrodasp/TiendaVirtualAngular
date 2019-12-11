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

  productos:Observable<Producto[]>;

  constructor(private dialogoConfirmacion:DialogoConfirmacionService,
              private servicio:ProductosService,
              private router:Router) {}
  
  ngOnInit() {
    this.listarProductos();
  }

  listarProductos() {
    this.productos = this.servicio.getProductos();
  }
  
  agregarProducto() {
    this.router.navigate(["nuevoProducto"]);
  }

  eliminarProducto(producto:Producto) {
    this.dialogoConfirmacion.confirm().then(
      (confirmado) => {if (confirmado) {
        this.servicio.eliminarProducto(producto).subscribe(
          data => {
            this.listarProductos();
          }
        );
      }}
    );
  }

  modificarProducto(producto:Producto) {
    localStorage.setItem("id", producto.id.toString());
    this.router.navigate(['modificarProducto']);
  }
}