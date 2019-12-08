import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/Servicios/categorias.service';
import { Categoria } from 'src/app/Modelos/Categoria';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-categorias',
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.css']
})
export class MenuCategoriasComponent implements OnInit {
  
  categorias:Observable<Categoria[]>;

  constructor(private servicio:CategoriasService,
              private router:Router) {}
  
  ngOnInit() {
    this.listarCategorias();
  }

  listarCategorias() {
    this.categorias = this.servicio.getCategorias();
  }
  
  agregarCategoria() {
    this.router.navigate(["agregarCategoria"]);
  }

  eliminarCategoria(categoria:Categoria) {
    this.servicio.eliminarCategoria(categoria).subscribe(
      data => {
        this.listarCategorias();
      }
    )
  }
}