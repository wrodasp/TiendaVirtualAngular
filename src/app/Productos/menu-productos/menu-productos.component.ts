import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-productos',
  templateUrl: './menu-productos.component.html',
  styleUrls: ['./menu-productos.component.css']
})
export class MenuProductosComponent implements OnInit {

  productos:Observable<Producto[]>;

  constructor(private servicio:ProductosService,
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
    this.router.navigate(["eliminarProducto"]);
  }
  modificarProducto(producto:Producto){
    localStorage.setItem("id", producto.id.toString());
    this.router.navigate(['modificarProducto']);
  }
}