import { Component, inject } from '@angular/core';
import { Livro } from './Livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro[] = [];

  modalService = inject(NgbModal);

abrirModal(abc:any){
  this.modalService.open(abc, {size: 'lg'})
}

addNaLista(livro: Livro){
  this.lista.push(livro);
  this.modalService.dismissAll();
}
}
