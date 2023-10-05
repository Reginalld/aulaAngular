import { Component } from '@angular/core';
import { Livro } from './Livro';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro[] = [];

  constructor(){
    let livro1: Livro = new Livro();
    livro1.autor = 'Reginaldo';
    livro1.titulo = 'Livro livresco';

    let livro2: Livro = new Livro();
    livro2.autor = 'Paulo';
    livro2.titulo = 'Livresco livro';

    this.lista.push(livro1);
    this.lista.push(livro2);

}
}
