import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { DialogoConfirmacionService } from 'src/app/Servicios/dialogo-confirmacion.service';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  producto = new Producto();
  constructor(private dialogoConfirmacion:DialogoConfirmacionService,
    private servicio:ProductosService,
    private router:Router) { }

  ngOnInit() {
    this.mostrarDatos();

  }
  mostrarDatos(){
     let id =localStorage.getItem("id");
     
    this.servicio.buscarProducto(parseInt(id)).subscribe(
      data => {
        this.producto = data;
      }
    );
  }
  actualizar(producto:Producto){
    this.dialogoConfirmacion.confirm().then(
      (confirmado) => {if (confirmado){
        this.servicio.modificarProducto(producto).subscribe(
          data=>{
            this.router.navigate([producto]);
          }
        );
      }}
    );
  }
}
