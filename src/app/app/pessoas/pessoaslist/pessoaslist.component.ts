import { Component } from '@angular/core';
import { Pessoa } from './Pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa[] = [];

  constructor(){
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.idade = 20;
    pessoa1.nome = 'Reginaldo';

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.idade = 30;
    pessoa2.nome = 'Carlos';

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.idade = 25;
    pessoa3.nome = 'Pedro';

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.idade = 35;
    pessoa4.nome = 'Douglas';

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.idade = 10;
    pessoa5.nome = 'Lucas';

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.idade = 50;
    pessoa6.nome = 'Maria';

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.idade = 40;
    pessoa7.nome = 'Ana';

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.idade = 21;
    pessoa8.nome = 'Julia';

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.idade = 42;
    pessoa9.nome = 'Gabriel';

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.idade = 41;
    pessoa10.nome = 'Paulo';


    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);
  }

}
