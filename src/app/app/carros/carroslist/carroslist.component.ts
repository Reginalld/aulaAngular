import { Component, inject } from '@angular/core';
import { Carro } from './Carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

    lista: Carro [] = [];

    modalService = inject(NgbModal);

    abrirModal(abc:any){
      this.modalService.open(abc, {size: 'lg'})
    }
    
    addNaLista(carro: Carro){
      this.lista.push(carro);
      this.modalService.dismissAll();
    }



}
