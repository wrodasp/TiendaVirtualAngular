import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/Servicios/categorias.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelos/Categoria';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit {

  categoria = new Categoria();
  constructor(private servicio:CategoriasService,
              private router:Router) { }

  ngOnInit() {
  }

  guardar(categoria) {
    this.servicio.agregarCategoria(this.categoria).subscribe(
      data => {
        this.router.navigate(["/categorias"]);
      }
    );
  }
}
