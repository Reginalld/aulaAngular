import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoaslist/Pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  route = inject(ActivatedRoute);
  pessoa!: Pessoa;

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      this.pessoa = new Pessoa();
      this.pessoa.idade = 10;
      this.pessoa.nome = "Maria";
  
    }else{
      this.pessoa = new Pessoa();
      this.pessoa.idade = 0;
      this.pessoa.nome = "";
 
    }
  }

}
