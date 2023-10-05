import { Component } from '@angular/core';
import { Carro } from './Carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

    lista: Carro [] = [];

    constructor(){

    let carro1: Carro = new Carro();
    carro1.ano = 2010;
    carro1.nome = 'Celta';

    let carro2: Carro = new Carro();
    carro2.ano = 1996;
    carro2.nome = 'Uno';

    this.lista.push(carro1);
    this.lista.push(carro2);

    }

}
