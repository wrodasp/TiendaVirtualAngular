import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Router } from '@angular/router';
import { ComprasService } from 'src/app/Servicios/compras.service';
import { Label, Color, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  masVendidosData: number[]
  masVendidosLabels: Label[]
  masVotadosData: number[]
  masVotadosLabels: Label[]
  queMasCompranData: number[]
  queMasCompranLabels: Label[]
  type: ChartType = "pie"
  colors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private servicioCompra: ComprasService) { }

  ngOnInit() {
    this.listarProductosMasVendidos()
    this.listartProductosMasVotados()
    this.listarClientesQueMasCompran()
  }

  listarProductosMasVendidos() {
    this.masVendidosData = new Array<number>()
    this.masVendidosLabels = new Array<Label>()
    this.servicioCompra.getProductosMasVendidos().subscribe(
      data => data.forEach(
        elemento => {
          this.masVendidosData.push(elemento[2])
          this.masVendidosLabels.push(elemento[1])
        }
      )
    )
  }

  listartProductosMasVotados() {
    this.masVotadosData = new Array<number>()
    this.masVotadosLabels = new Array<Label>()
    this.servicioCompra.getProductosMasVotados().subscribe(
      data => data.forEach(
        elemento => {
            this.masVotadosData.push(elemento[1])
            this.masVotadosLabels.push(elemento[0])
        }
      )
    )
  }

  listarClientesQueMasCompran() {
    this.queMasCompranData = new Array<number>()
    this.queMasCompranLabels = new Array<Label>()
    this.servicioCompra.getClientesQueMasCompran().subscribe(
      data => data.forEach(
        elemento => {
          this.queMasCompranData.push(elemento[2])
          this.queMasCompranLabels.push(elemento[0] + " " + elemento[1])
        }
      )
    )
  }
}