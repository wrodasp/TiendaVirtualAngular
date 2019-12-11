import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarCategoriaComponent } from './Categorias/agregar-categoria/agregar-categoria.component';
import { MenuCategoriasComponent } from './Categorias/menu-categorias/menu-categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasService } from './Servicios/categorias.service';
import { MenuProductosComponent } from './Productos/menu-productos/menu-productos.component';
import { AgregarProductoComponent } from './Productos/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './Productos/modificar-producto/modificar-producto.component';
import { ProductosService } from './Servicios/productos.service';
import { MenuUsuariosComponent } from './Usuarios/menu-usuarios/menu-usuarios.component';
import { AgregarUsuarioComponent } from './Usuarios/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './Usuarios/modificar-usuario/modificar-usuario.component';
import { DialogoConfirmacionComponent } from './Extras/dialogo-confirmacion/dialogo-confirmacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from './Servicios/usuarios.service';
import { DialogoConfirmacionService } from './Servicios/dialogo-confirmacion.service';

import { ProductoCategoriaService } from './Servicios/productoCategoria.service';


@NgModule({
  declarations: [
    AppComponent,
    AgregarCategoriaComponent,
    MenuCategoriasComponent,
    MenuProductosComponent,
    AgregarProductoComponent,
    ModificarProductoComponent,
    MenuUsuariosComponent,
    AgregarUsuarioComponent,
    ModificarUsuarioComponent,
    DialogoConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [CategoriasService,
              ProductosService,
              UsuariosService,
              ProductoCategoriaService,
              DialogoConfirmacionService],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogoConfirmacionComponent
  ]
})
export class AppModule { }
