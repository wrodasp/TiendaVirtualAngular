import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/Servicios/categorias.service';
import { Categoria } from 'src/app/Modelos/Categoria';
import { Observable } from 'rxjs';
import { DialogoConfirmacionService } from 'src/app/Servicios/dialogo-confirmacion.service';

@Component({
  selector: 'app-menu-categorias',
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.css']
})
export class MenuCategoriasComponent implements OnInit {
  
  categorias:Observable<Categoria[]>;

  constructor(private dialogoConfirmacion:DialogoConfirmacionService,
              private servicio:CategoriasService,
              private router:Router) {}
  
  ngOnInit() {
    this.listarCategorias();
  }

  listarCategorias() {
    this.categorias = this.servicio.getCategorias();
  }
  
  agregarCategoria() {
    this.router.navigate(["nuevaCategoria"]);
  }

  eliminarCategoria(categoria:Categoria) {
    this.dialogoConfirmacion.confirm().then(
      (confirmado) => {if (confirmado) {
        this.servicio.eliminarCategoria(categoria).subscribe(
          data => {
            this.listarCategorias();
          }
        );
      }}
    );
  }
}