import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarCategoriaComponent } from './Categorias/agregar-categoria/agregar-categoria.component';
import { MenuCategoriasComponent } from './Categorias/menu-categorias/menu-categorias.component';
import { MenuProductosComponent } from './Productos/menu-productos/menu-productos.component';
import { AgregarProductoComponent } from './Productos/agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './Productos/eliminar-producto/eliminar-producto.component';
import { ModificarProductoComponent } from './Productos/modificar-producto/modificar-producto.component';
import { MenuUsuariosComponent } from './Usuarios/menu-usuarios/menu-usuarios.component';
import { AgregarUsuarioComponent } from './Usuarios/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './Usuarios/modificar-usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from './Usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {path:'categorias', component:MenuCategoriasComponent},
  {path:'nuevaCategoria', component:AgregarCategoriaComponent},
  {path:'productos', component:MenuProductosComponent},
  {path:'nuevoProducto', component:AgregarProductoComponent},
  {path:'modificarProducto', component:ModificarProductoComponent},
  {path:'eliminarProducto', component:EliminarProductoComponent},
  {path:'usuarios', component:MenuUsuariosComponent},
  {path:'nuevoUsuario', component:AgregarUsuarioComponent},
  {path:'modificarUsuario', component:ModificarUsuarioComponent},
  {path:'eliminarUsuario', component:EliminarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}