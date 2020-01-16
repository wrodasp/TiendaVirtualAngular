import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarCategoriaComponent } from './Categorias/agregar-categoria/agregar-categoria.component';
import { MenuCategoriasComponent } from './Categorias/menu-categorias/menu-categorias.component';
import { MenuProductosComponent } from './Productos/menu-productos/menu-productos.component';
import { AgregarProductoComponent } from './Productos/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './Productos/modificar-producto/modificar-producto.component';
import { MenuUsuariosComponent } from './Usuarios/menu-usuarios/menu-usuarios.component';
import { AgregarUsuarioComponent } from './Usuarios/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './Usuarios/modificar-usuario/modificar-usuario.component';
import { LoginComponent } from './Extras/login/login.component';
import { PanelAdministradorComponent } from './Extras/panel-administrador/panel-administrador.component';
import { PanelUsuarioComponent } from './Extras/panel-usuario/panel-usuario.component';
import { EstadisticasComponent } from './Extras/estadisticas/estadisticas.component';
import { CarritoComponent } from './Carrito/carrito/carrito.component';
import { NuevaCuentaComponent } from './Extras/nueva-cuenta/nueva-cuenta.component';
import { VerProductoComponent } from './Productos/ver-producto/ver-producto.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component: InicioComponent},
  {path:'administracion/categorias', component:MenuCategoriasComponent},
  {path:'administracion/categorias/nuevaCategoria', component:AgregarCategoriaComponent},
  {path:'administracion/productos', component:MenuProductosComponent},
  {path:'administracion/productos/nuevoProducto', component:AgregarProductoComponent},
  {path:'administracion/productos/modificarProducto', component:ModificarProductoComponent},
  {path:'administracion/usuarios', component:MenuUsuariosComponent},
  {path:'administracion/usuarios/nuevoUsuario', component:AgregarUsuarioComponent},
  {path:'administracion/usuarios/modificarUsuario', component:ModificarUsuarioComponent},
  {path:'login', component:LoginComponent},
  {path:'administracion', component:PanelAdministradorComponent},
  {path:'cuenta', component: PanelUsuarioComponent},
  {path:'administracion/estadisticas', component: EstadisticasComponent},
  {path:'carrito', component: CarritoComponent},
  {path:'nuevaCuenta', component: NuevaCuentaComponent},
  {path:'detalleProducto/:id', component: VerProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}