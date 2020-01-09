import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  producto = new Producto();

  constructor(private servicio:ProductosService,
              private router:Router) { }

  ngOnInit() {
    this.mostrarDatos();
  }

  mostrarDatos(){
    let id = localStorage.getItem("id");
    this.servicio.buscarProducto(parseInt(id)).subscribe(
      data => {
        this.producto = data;
      }
    );
  }

}
