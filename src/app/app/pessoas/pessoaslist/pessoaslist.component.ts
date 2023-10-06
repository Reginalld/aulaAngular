import { Component, inject } from '@angular/core';
import { Pessoa } from './Pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa[] = [];

  modalService = inject(NgbModal);

  abrirModal(abc:any){
    this.modalService.open(abc, {size: 'lg'})
  }

  addNaLista(pessoa: Pessoa){
    this.lista.push(pessoa);
    this.modalService.dismissAll();
  }

}
