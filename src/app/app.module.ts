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
import { LoginComponent } from './Extras/login/login.component';
import { PanelAdministradorComponent } from './Extras/panel-administrador/panel-administrador.component';
import { PanelUsuarioComponent } from './Extras/panel-usuario/panel-usuario.component';
import { EstadisticasComponent } from './Extras/estadisticas/estadisticas.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule} from '@angular/material/radio';
import { CarritoComponent } from './Carrito/carrito/carrito.component';
import { NuevaCuentaComponent } from './Extras/nueva-cuenta/nueva-cuenta.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VerProductoComponent } from './Productos/ver-producto/ver-producto.component'
import { ComprasService } from './Servicios/compras.service';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { ShareButtonModule } from '@ngx-share/button';
import { DatosFacturacionComponent } from './Carrito/datos-facturacion/datos-facturacion.component';

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
    DialogoConfirmacionComponent,
    LoginComponent,
    PanelAdministradorComponent,
    PanelUsuarioComponent,
    EstadisticasComponent,
    CarritoComponent,
    NuevaCuentaComponent,
    VerProductoComponent,
    InicioComponent,
    DatosFacturacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    Ng2SearchPipeModule,
    ShareButtonModule
  ],
  providers: [CategoriasService,
              ProductosService,
              UsuariosService,
              ComprasService,
              DialogoConfirmacionService],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogoConfirmacionComponent
  ]
})
export class AppModule { }
