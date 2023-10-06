import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livroslist/Livro';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  route = inject(ActivatedRoute);
  livro : Livro = new Livro();

  @Output() retorno = new EventEmitter<Livro>();


  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }


  salvar(){
    this.retorno.emit(this.livro);
  }
}

