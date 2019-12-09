import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogoConfirmacionComponent } from '../Extras/dialogo-confirmacion/dialogo-confirmacion.component';

@Injectable({
  providedIn: 'root'
})
export class DialogoConfirmacionService {

  constructor(private servicio:NgbModal) { }

  confirm(): Promise<Boolean> {
    let respuesta = this.servicio.open(DialogoConfirmacionComponent,{size:"sm"});
    return respuesta.result;
  }
}
