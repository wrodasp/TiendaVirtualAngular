import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto = new Producto();
  constructor(private servicio:ProductosService,
              private router:Router) { }

  ngOnInit() {
  }

  guardar() {
    this.servicio.agregarProducto(this.producto).subscribe(
      data => {
        this.router.navigate(["/productos"]);
      }
    );
  }
}
