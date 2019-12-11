import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Categoria } from 'src/app/Modelos/Categoria';
import { CategoriasService } from 'src/app/Servicios/categorias.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto = new Producto();
  
  categorias:Observable<Categoria[]>;
  constructor(private servicio:ProductosService,
              private router:Router,
              private servicocat:CategoriasService) { }

  ngOnInit() {
   this.listarCategoria();
  }

  guardar() {
    this.servicio.agregarProducto(this.producto).subscribe(
      data => {
        this.router.navigate(["/productos"]);
      }
    );
  }
  listarCategoria(){
    this.servicocat.getCategorias().subscribe(
      data =>{
        this.categorias=data;
      }
    );

  }
}
