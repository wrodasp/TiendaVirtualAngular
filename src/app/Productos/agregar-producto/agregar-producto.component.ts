import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Categoria } from 'src/app/Modelos/Categoria';
import { CategoriasService } from 'src/app/Servicios/categorias.service';
import { Observable, Subscriber } from 'rxjs';
import { ProductoCategoriaService } from 'src/app/Servicios/productoCategoria.service';
import { ProductoCategoria } from 'src/app/Modelos/productoCategoria';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto = new Producto();
  producto2 = new Producto();
  productoCat = new ProductoCategoria();
  categorias: Observable<Categoria[]>;
  form: FormGroup;
  ordersData = [ 
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];
  constructor(private formBuilder: FormBuilder,private servicio: ProductosService,
    private router: Router,
    private servi: ProductoCategoriaService,
    private servicocat: CategoriasService) {
      this.form = this.formBuilder.group({
        orders: new FormArray([])
       
     });
     this.addCheckboxes();
     }

  ngOnInit() {
    this.listarCategoria();
  }
  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }
  submit(
    
  ) {

   }
  guardar() {
    console.log(this.productoCat.estado);
    this.servicio.agregarProducto(this.producto).subscribe(
      data => {
        this.servicio.buscarProductoDesc(this.producto.descripcion).subscribe(
          data => {
            console.log("trae dato: " + data.id);
            this.productoCat.producto_id = data.id;
            this.productoCat.categoria_id = data.id;
            this.servi.agregarProductoCategoria(this.productoCat).subscribe(
              data => {
                this.router.navigate(["/productos"]);
              }
            );
          }
        )
        // this.router.navigate(["/productos"]);
      }
    );

  }
  listarCategoria() {
    this.servicocat.getCategorias().subscribe(
      data => {
        this.categorias = data;
        this.categorias.subscribe(i => console.log(i));
      }
    );

  }
}
