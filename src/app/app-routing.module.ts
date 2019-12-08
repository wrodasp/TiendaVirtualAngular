import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarCategoriaComponent } from './Categorias/agregar-categoria/agregar-categoria.component';
import { EliminarCategoriaComponent } from './Categorias/eliminar-categoria/eliminar-categoria.component';
import { MenuCategoriasComponent } from './Categorias/menu-categorias/menu-categorias.component';

const routes: Routes = [
  {path:'categorias', component:MenuCategoriasComponent},
  {path:'agregarCategoria', component:AgregarCategoriaComponent},
  {path:'eliminarCategoria', component:EliminarCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}