import { Component, OnInit } from '@angular/core';
import { ProductoCategoriaService } from 'src/app/Servicios/productoCategoria.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelos/Categoria';
import { ProductoCategoria } from 'src/app/Modelos/productoCategoria';

@Component({
  selector: 'app-agregar-categoria-producto',
  templateUrl: './agregar-categoria-producto.component.html',
  styleUrls: ['./agregar-categoria-producto.component.css']
})
export class AgregarCategoriaProductoComponent implements OnInit {

  productocategoria= new ProductoCategoria();
  constructor(private servicio:ProductoCategoriaService, private router:Router) { }

  ngOnInit() {
  }

  guardar(){
    this.servicio.agregarProductoCategoria(this.productocategoria).subscribe(
      data =>{
        
        this.router.navigate(["/productos"]);
      
      }
    );

    }
  }
