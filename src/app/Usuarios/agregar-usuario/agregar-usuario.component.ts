import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/Usuario';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  usuario = new Usuario();
  
  constructor(private servicio:UsuariosService,
              private router:Router) { }

  ngOnInit() {
    this.usuario.roll="Cliente"
  }

  guardar() {
    this.usuario.correo = this.usuario.correo + ".";
    this.servicio.agregarUsuario(this.usuario).subscribe(
      data => {
        this.router.navigate(["/usuarios"]);
      }
    );
  }
}
