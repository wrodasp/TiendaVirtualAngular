import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-administrador',
  templateUrl: './panel-administrador.component.html',
  styleUrls: ['./panel-administrador.component.css']
})
export class PanelAdministradorComponent implements OnInit {

  title = 'PanelAdministrador';
  rutaLogout = '../assets/imagenes/logout.png'

  constructor(private router:Router) {}
  
  ngOnInit() {
  }

  abrirUsuarios() {
    this.router.navigate(["administracion/usuarios"]);
  }

  abrirProductos() {
    this.router.navigate(["administracion/productos"]);
  }

  abrirCategorias() {
    this.router.navigate(["administracion/categorias"]);
  }

  abrirEstadisticas() {
    this.router.navigate(["administracion/estadisticas"]);
  }

  cerrarSesion() {
    localStorage.setItem("login","false")
    this.router.navigate(["inicio"]);
  }
}