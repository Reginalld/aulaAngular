import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../../../../models/Carro';
import { CarroService } from 'src/services/carros.service';


@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  @Output() retorno = new EventEmitter<Carro>();
  @Input() carro: Carro = new Carro();

  carroService = inject(CarroService);

  constructor(){
  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.carroService.save(this.carro).subscribe({
      next: carro => { // QUANDO DÁ CERTO
        this.retorno.emit(carro);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }
}
