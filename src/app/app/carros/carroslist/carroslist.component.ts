import { Component, inject } from '@angular/core';
import { Carro } from '../../../../models/Carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from 'src/services/carros.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

    lista: Carro [] = [];

    modalService = inject(NgbModal);

    carroSelecionadoParaEdicao: Carro = new Carro();
    indiceSelecionadoParaEdicao!: number;
  
    carroService = inject(CarroService);
    constructor(){
      this.listAll();
    }
  
    abrirModal(abc:any){
      this.modalService.open(abc, {size: 'lg'})
    }
  
    listAll() {
  
      this.carroService.listAll().subscribe({
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
  
      this.carroService.exemploErro().subscribe({
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
      this.carroSelecionadoParaEdicao = new Carro();
  
      this.modalService.open(modal, { size: 'sm' });
    }
  
    editar(modal: any, carro: Carro, indice: number) {
      this.carroSelecionadoParaEdicao = Object.assign({}, carro); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
      this.indiceSelecionadoParaEdicao = indice;
  
      this.modalService.open(modal, { size: 'lg' });
    }
  
    deletar(id : number){
      this.carroService.delete(id).subscribe({
        next: carro => { // QUANDO DÁ CERTO
          alert("Excluido com sucesso!");
          this.listAll();
        },
        error: erro => { // QUANDO DÁ ERRO
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
  
    }
  
    addOuEditarPessoa(carro: Carro) {
  
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
