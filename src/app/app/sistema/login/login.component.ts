import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/sistema/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  reteador = inject(Router);

  usuario: Usuario = new Usuario();

  logar(){
    if(this.usuario.usuario == "admin" && this.usuario.senha == "admin"){
        this.reteador.navigate(['/admin/pessoas'])
    }else{
      alert("Alguma coisa errada");
    }
  }

}
