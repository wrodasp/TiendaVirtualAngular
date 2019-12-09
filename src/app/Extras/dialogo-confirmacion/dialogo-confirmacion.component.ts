import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo-confirmacion.component.html',
  styleUrls: ['./dialogo-confirmacion.component.css']
})
export class DialogoConfirmacionComponent implements OnInit {

  constructor(private servicio: NgbActiveModal) { }

  ngOnInit() {
  }

  cancelar() {
    this.servicio.close(false);
  }

  confirmar() {
    this.servicio.close(true);
  }
}