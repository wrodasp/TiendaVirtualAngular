import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarCategoriaComponent } from './Categorias/agregar-categoria/agregar-categoria.component';
import { EliminarCategoriaComponent } from './Categorias/eliminar-categoria/eliminar-categoria.component';
import { MenuCategoriasComponent } from './Categorias/menu-categorias/menu-categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasService } from './Servicios/categorias.service';

@NgModule({
  declarations: [
    AppComponent,
    AgregarCategoriaComponent,
    EliminarCategoriaComponent,
    MenuCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
