import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/Usuario';
import { DialogoConfirmacionService } from 'src/app/Servicios/dialogo-confirmacion.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usuario = new Usuario();

  constructor(private dialogoConfirmacion:DialogoConfirmacionService,
              private servicio:UsuariosService,
              private router:Router) { }

  ngOnInit() {
    this.mostrarDatos();
  }

  mostrarDatos() {
    let correo = localStorage.getItem("correo");
    this.servicio.buscarUsuario(correo).subscribe(
      data => {
        this.usuario = data;
      }
    );
  }

  actualizar(usuario:Usuario) {
    this.dialogoConfirmacion.confirm().then(
      (confirmado) => {if (confirmado) {
        this.servicio.modificarUsuario(usuario).subscribe(
          data => {
            this.router.navigate(["administracion/usuarios"]);
          }
        );
      }}
    );
  }
}
