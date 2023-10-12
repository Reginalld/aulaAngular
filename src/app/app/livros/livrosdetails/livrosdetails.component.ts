import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../../../../models/Livro';
import { LivroService } from 'src/services/livros.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {
  
  @Output() retorno = new EventEmitter<Livro>();
  @Input() livro: Livro = new Livro();

  livroService = inject(LivroService);


  constructor(){
  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.livroService.save(this.livro).subscribe({
      next: livro => { // QUANDO DÁ CERTO
        this.retorno.emit(livro);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
}
}
