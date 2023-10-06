import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carroslist/Carro';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  route = inject(ActivatedRoute);
  carro : Carro = new Carro();

  @Output() retorno = new EventEmitter<Carro>();


  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
  }

  salvar(){
    this.retorno.emit(this.carro);
  }

}
