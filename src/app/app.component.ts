import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PanelAdministrador';

  constructor(private router:Router) {}
  
  ngOnInit() {
    this.abrirUsuarios();
  }

  abrirUsuarios() {
    this.router.navigate(["usuarios"]);
  }

  abrirProductos() {
    this.router.navigate(["productos"]);
  }

  abrirCategorias() {
    this.router.navigate(["categorias"]);
  }
}