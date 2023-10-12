import { Component, inject } from '@angular/core';
import { Livro } from '../../../../models/Livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from 'src/services/livros.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro[] = [];

  modalService = inject(NgbModal);

  livroSelecionadaParaEdicao: Livro = new Livro();
  indiceSelecionadoParaEdicao!: number;

  livroService = inject(LivroService);

  constructor(){
    this.listAll();
  }
  abrirModal(abc:any){
    this.modalService.open(abc, {size: 'lg'})
  }

  listAll() {

    this.livroService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  exemploErro() {

    this.livroService.exemploErro().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  adicionar(modal: any) {
    this.livroSelecionadaParaEdicao = new Livro();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, livro: Livro, indice: number) {
    this.livroSelecionadaParaEdicao = Object.assign({}, livro); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'lg' });
  }

  deletar(id : number){
    this.livroService.delete(id).subscribe({
      next: livro => { // QUANDO DÁ CERTO
        alert("Excluido com sucesso!");
        this.listAll();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  addOuEditarPessoa(livro: Livro) {

    this.listAll();

    /*

    if (this.pessoaSelecionadaParaEdicao.id > 0) { //MODO EDITAR
      this.lista[this.indiceSelecionadoParaEdicao] = pessoa;
    } else {
      pessoa.id = 99;
      this.lista.push(pessoa);
    }
    */

    this.modalService.dismissAll();

  }

}
