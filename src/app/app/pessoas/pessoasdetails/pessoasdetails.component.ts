import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, OutletContext } from '@angular/router';
import { Pessoa } from '../../../../models/Pessoa';
import { PessoaService } from 'src/services/pessoas.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  @Output() retorno = new EventEmitter<Pessoa>();
  @Input() pessoa: Pessoa = new Pessoa();

  pessoaService = inject(PessoaService);

  constructor(){
  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.pessoaService.save(this.pessoa).subscribe({
      next: pessoa => { // QUANDO DÁ CERTO
        this.retorno.emit(pessoa);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


}
